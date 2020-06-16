import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { Movie } from 'src/app/models/Movie';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  showForm: boolean = false;
  cartItems;
  cartTotal;

  constructor(
    private cartService: CartService, ) { }

  ngOnInit(): void {

    this.cartService.cartSource.subscribe((items: Cart[]) => {
      this.cartItems = items;
    });

    this.cartItems = this.cartService.showItems();
    this.cartTotal = this.cartService.totalPrice;
  }

  increase(item) {
    this.cartItems = this.cartService.increaseCartItem(item);
    this.cartTotal = this.cartService.totalPrice;
  }

  decrease(item) {
    this.cartItems = this.cartService.decreaseItems(item);
    console.log(item.quantity);
    this.cartTotal = this.cartService.totalPrice;
    console.log(this.cartService.totalPrice);
  }

}
