import { Component, OnInit } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';
import { ClothingItemsService } from 'src/app/services/clothingItems/clothing-items.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  products:ClothingItem[] = []

  productsInCart:ClothingItem[] = []

  constructor(private clothingService:ClothingItemsService) { }

  ngOnInit(): void {
    this.clothingService.getAllClothingItems().subscribe((data:any)=>{
      this.products = data
    })

    this.loadCart()
  }

  addProductToCart(product:ClothingItem){
    console.log(product);
  }

  loadCart(){
    if(localStorage.getItem('cart')){
      this.productsInCart = JSON.parse(localStorage.getItem('cart') ?? '')
    }
  }

  saveCart(myProduct:ClothingItem){
    this.productsInCart.push(myProduct)
    localStorage.setItem('cart', JSON.stringify(this.productsInCart))
  }


}
