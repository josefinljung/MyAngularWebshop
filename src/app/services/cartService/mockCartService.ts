import { Movie } from "src/app/models/Movie";
import ICart from './ICart';
import { Cart } from 'src/app/models/Cart';
import { Subject } from 'rxjs';



export class MockCartService implements ICart {


cartList: Cart[] = [];
movieInCart: Cart;
cartSource = new Subject<Cart[]>();
totalList = [];
totalPrice: number = 0;


movie = { Name: 'film', ImageUrl: 'enurl', Year: '2000', Price: 33, Id: 10, Description: 'beskrivning'};

addToCart(movie: Movie) {
  this.movieInCart = this.cartList.find((m) => m.Id === movie.Id);

  if (!this.movieInCart) {
      this.cartList.push({
        ...movie,
        Id: movie.Id,
        quantity: 1,
        totalSum: movie.Price
      });
      return;
  }
  this.totalSum();
  this.increaseCartItem(this.movieInCart);
}

showItems() {
  this.totalSum();
  return this.cartList ;
}

increaseCartItem(item: Cart) {
  this.movieInCart = this.cartList.find((m) => m.Id === item.Id);
  this.movieInCart.quantity++;
  this.totalSum();
  return this.cartList;
}

decreaseItems(item: Cart) {
  this.movieInCart = item;
  if (this.movieInCart.quantity > 1) {
    this.movieInCart.quantity--;
    this.movieInCart.totalSum =  this.movieInCart.quantity * this.movieInCart.Price;
    return this.cartList;
  } else {
    this.cartList = this.cartList.filter((ritem) =>
    this.movieInCart.Id !== ritem.Id);
    return this.cartList;
  }
}

totalSum() {
  let calcPrice = 0;
  this.cartList.forEach((cartItems) => {
    calcPrice += cartItems.quantity * cartItems.Price;
  });
  this.totalPrice = calcPrice;
}

}
