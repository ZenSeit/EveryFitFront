import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hostLocal } from 'src/environments/settingsToStart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrdersByCustomerID(customerId:string):Observable<any>{
    return this.http.get(hostLocal.host+`/orders/${customerId}`)
  }

  generateOrder(order:any):Observable<any>{
    return this.http.post(hostLocal.host+`/orders`,order)
  }

  deleteOrder(orderId:string):Observable<any>{
    return this.http.delete(hostLocal.host+`/orders/${orderId}`)
  }

  updateOrderState(orderId:string,state:string):Observable<any>{
    return this.http.put(hostLocal.host+`/orders/${orderId}/${state}`,null)
  }




}
