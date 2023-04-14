import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClothingItem } from 'src/app/models/clothingItem.model';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { ClothingItemsService } from 'src/app/services/clothingItems/clothing-items.service';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { OrderService } from 'src/app/services/order/order.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  customer: Customer | undefined = undefined;



  constructor(private orderService: OrderService,
    private clothingsService: ClothingItemsService,
    private tokenService: TokenService,
    private customerService: CustomerService,
    private router: Router,
    private jwtAuth:JwtHelperService
    ) {}


  ngOnInit(): void {
    this.updateCustomerHeader();
  }

  generateOrder(order: Order) {
    this.orderService.generateOrder(order).subscribe((order) => {
      localStorage.removeItem('cart');
      const products: ClothingItem[] = order.products;
      products.map((product) => {
        this.clothingsService.updateInventoryAfterBuy(product?.id || '', product?.quantity).subscribe(
          res => console.log(res),
        );
      });
      this.router.navigate(['/ordergenerated'], { queryParams: { data: JSON.stringify(order) } });
    });
  }

  updateCustomerHeader(){
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (token) {
        this.customerService.getCustomerByEmail(this.jwtAuth.decodeToken(token).email).subscribe((customer) => {
          this.customer = customer;
        } );
      }
    } );
  }

  logout() {
    this.tokenService.closeSession();
    this.updateCustomerHeader();
    this.router.navigate([this.router.url], { skipLocationChange: true }).then(() => {
      window.location.reload();
    });
  }

}
