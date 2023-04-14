import { Component, Input } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  @Input() products: ClothingItem[] = [];

}
