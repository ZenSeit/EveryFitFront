import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.loadCart()
  }
  title = 'everyFitFront';
}
