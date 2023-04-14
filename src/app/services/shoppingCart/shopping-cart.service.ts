import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClothingItem } from 'src/app/models/clothingItem.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productsInCart:ClothingItem[] = []

  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }


  loadCart():Observable<ClothingItem[]>{
    return new Observable((observer)=>{
      this.productsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ?? '') : []
      const total = this.productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
      this.total.next(total);
      observer.next(this.productsInCart)
    })
  }

  calculateTotal(): Observable<number> {
    return this.total.asObservable();
  }
  


  saveCart(productInfo:any){

    const myProduct:ClothingItem = productInfo[0]

    const quantityInStock = productInfo[1]
    
    const isProductInCart = this.productsInCart.find((product)=>product.id === myProduct.id);

    if(isProductInCart){
      this.productsInCart.map((product)=>{ 
        if(product.id === myProduct.id){
          product.quantity += myProduct.quantity
          if(product.quantity > quantityInStock) product.quantity = quantityInStock
        }
      })
      localStorage.setItem('cart', JSON.stringify(this.productsInCart))
      }else{
        this.productsInCart.push(myProduct)
        localStorage.setItem('cart', JSON.stringify(this.productsInCart))
      }
      const total = this.productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
      this.total.next(total);

    
  }

  deleteItemFromCart(id:string){
    this.productsInCart = this.productsInCart.filter((product)=>product.id !== id)
    localStorage.setItem('cart', JSON.stringify(this.productsInCart))
  }
}
