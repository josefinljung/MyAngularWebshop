import { Cart } from '../../models/Cart';
import { Movie } from 'src/app/models/Movie';


export default interface ICart {
  cartList: Cart[];
  addToCart(movie): void;
  showItems(): void;
}
