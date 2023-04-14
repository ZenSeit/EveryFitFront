import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { OrderService } from 'src/app/services/order/order.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  customer: Customer | undefined;
  orders: Order[] = [];

  constructor(
    private customerService: CustomerService,
    private tokenService: TokenService,
    private jwtAuth: JwtHelperService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.updateCustomerHeader();
  }

  updateCustomerHeader() {
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (token) {
        this.customerService
          .getCustomerByEmail(this.jwtAuth.decodeToken(token).email)
          .subscribe((customer) => {
            this.customer = customer;
            this.orderService
              .getOrdersByCustomerID(this.customer?.id || '')
              .subscribe((orders) => {
                this.orders = orders;
              });
          });
      }
    });
  }

  cancelOrder(orderInfo:any) {
    this.orderService
      .updateOrderState(orderInfo.orderId, orderInfo.orderStatus)
      .subscribe((data) => {
        this.updateCustomerHeader();
      });
  }
}
