import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ClothingItem } from 'src/app/models/clothingItem.model';
import { Order } from 'src/app/models/order.model';
import { ClothingItemsService } from 'src/app/services/clothingItems/clothing-items.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private orderService: OrderService,
    private clothingsService: ClothingItemsService,
    private router: Router
    ) {}

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

}
