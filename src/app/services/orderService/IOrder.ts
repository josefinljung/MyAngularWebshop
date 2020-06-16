import { Subject } from 'rxjs';
import { Order } from 'src/app/models/Order';

export default interface IOrder {
  orderList: Subject<Order[]>;
  showOrders(): void;
  createOrder(order);
  removeOrder(order);
}
