import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product:ClothingItem | undefined = undefined

  @Output() productInCart=new EventEmitter<any>();


  quantityToBuy:number = 1

  constructor() { 
  }

  addCart(){
    if(this.product){
      const productToCart:ClothingItem = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        quantity: this.quantityToBuy,
        category: this.product.category,
        urlImage: this.product.urlImage
      }

      this.productInCart.emit(productToCart)

    }
    
  }

  increaseQuantity(){
    if((this.product?.quantity ?? 0)>this.quantityToBuy) this.quantityToBuy++
  }

  decreaseQuantity(){
    if(this.quantityToBuy>1) this.quantityToBuy--
  }

}
