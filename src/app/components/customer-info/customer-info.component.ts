import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customerService/customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  @Input() customerId: string = '';

  customer: Customer | undefined;

  constructor(private customerService:CustomerService) { }


  ngOnInit(): void {
    this.customerService.getCustomerById('string').subscribe((customer:Customer) => {
      this.customer = customer;
    } );

  }

 
}
