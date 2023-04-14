import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hostLocal } from 'src/environments/settingsToStart';

@Injectable({
  providedIn: 'root'
})
export class ClothingItemsService {

  constructor(private http:HttpClient) { }

  getAllClothingItems():Observable<any>{
    return this.http.get(hostLocal.host+`/items`)
  }

  getClothingItemById(id:string):Observable<any>{
    return this.http.get(hostLocal.host+`/items/${id}`)
  }

  saveItem(item:any):Observable<any>{
    return this.http.post(hostLocal.host+`/items`,item)
  }

  deleteItem(id:string):Observable<any>{
    return this.http.delete(hostLocal.host+`/items/${id}`)
  }

  modifyQuantity(id:string,quantity:number):Observable<any>{
    return this.http.put(hostLocal.host+`/items/${id}/${quantity}`,null)
  }

  updateInventoryAfterBuy(id:string,quantity:number):Observable<any>{
    return this.http.put(hostLocal.host+`/items/buy/${id}/${quantity}`,null)
  }


}
