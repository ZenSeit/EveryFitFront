import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customerService/customer.service';

@Component({
  selector: 'app-order-generated-page',
  templateUrl: './order-generated-page.component.html',
  styleUrls: ['./order-generated-page.component.scss'],
})
export class OrderGeneratedPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,
    private customerService:CustomerService) {}

  orderGenerated: Order | undefined= undefined;

  total : number = 0;

  customer: Customer | undefined = undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['data'] == undefined) {
        this.router.navigate(['/home']);
      } else {
        this.orderGenerated = JSON.parse(params['data']);
        this.total = this.orderGenerated?.products.map((product) => product.price*product.quantity).reduce((a, b) => a + b, 0) || 0;
      }
    });
  }
}
