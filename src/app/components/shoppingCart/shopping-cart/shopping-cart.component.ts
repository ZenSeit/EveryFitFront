import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ClothingItem } from 'src/app/models/clothingItem.model';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  @Output() newOrder = new EventEmitter<Order>();

  isCartOpen: boolean = false;

  cartItems: ClothingItem[] = [];

  total: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.refreshCartAndCalculateTotal();
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  removeProduct(id: string) {
    this.shoppingCartService.deleteItemFromCart(id);
    this.refreshCart();
    this.refreshCartAndCalculateTotal();
  }

  refreshCart() {
    this.shoppingCartService.loadCart().subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  refreshCartAndCalculateTotal() {
    this.shoppingCartService.loadCart().subscribe((cartItems) => {
      this.cartItems = cartItems;
    });

    this.shoppingCartService.calculateTotal().subscribe((total) => {
      this.total = total;
    });
  }

  sendOrder() {
    const newOrder: Order = {
      customer: '',
      products: this.cartItems,
      state: 'PAYMENT',
    };

    this.newOrder.emit(newOrder);
  }
}
