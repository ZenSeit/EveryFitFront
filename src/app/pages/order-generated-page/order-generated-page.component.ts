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

  customer: Customer | undefined = undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['data'] == undefined) {
        this.router.navigate(['/home']);
      } else {
        this.orderGenerated = JSON.parse(params['data']);
        this.customerService.getCustomerById('string').subscribe((customer) => {
          this.customer = customer;
        } );
      }
    });
  }
}
