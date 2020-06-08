import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    addedToCartMovies = [];

    addToCart(m) {
      this.addedToCartMovies.push(m);
      console.log(m);
    }

    getItems() {
      return this.addedToCartMovies;
    }

    clearCart() {
      this.addedToCartMovies = [];
      return this.addedToCartMovies;
    }


  constructor() { }
}
