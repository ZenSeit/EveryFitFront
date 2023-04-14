import { Component, OnInit } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';
import { ClothingItemsService } from 'src/app/services/clothingItems/clothing-items.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  products:ClothingItem[] = []

  show:boolean = false;

  constructor(private clothingService:ClothingItemsService,
    private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.clothingService.getAllClothingItems().subscribe((data:any)=>{
      this.products = data
    })
  }

  addProductToCart(product:ClothingItem){
    this.shoppingCartService.saveCart(product)
  }

  


}
