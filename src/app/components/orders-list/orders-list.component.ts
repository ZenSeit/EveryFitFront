import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {

  @Input() orders:Order[] = []
  @Output() orderSelected = new EventEmitter<any>()

  constructor() { }

  cancelOrder(orderId:string){
    this.orderSelected.emit({orderId:orderId,orderStatus:3})
  }




}
