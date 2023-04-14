import { Pipe, PipeTransform } from '@angular/core';
import { ClothingItem } from '../models/clothingItem.model';

@Pipe({
  name: 'productsTotal'
})
export class ProductsTotalPipe implements PipeTransform {

  transform(value: ClothingItem[], ...args: unknown[]): unknown {
    return value.map((product) => product.price*product.quantity).reduce((a, b) => a + b, 0) 
  }

}
