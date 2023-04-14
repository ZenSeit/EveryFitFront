import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';

@Component({
  selector: 'app-product-in-cart-card',
  templateUrl: './product-in-cart-card.component.html',
  styleUrls: ['./product-in-cart-card.component.scss']
})
export class ProductInCartCardComponent {

  @Input() product:ClothingItem | undefined = undefined

  @Output() productRemoved=new EventEmitter<any>();

  constructor() { }

  removeProduct(){
    if(this.product){
      this.productRemoved.emit(this.product.id)
    }
  }

}
