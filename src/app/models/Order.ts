import { Cart } from '../models/Cart';

export class Order {
  orderId?: number;
  companyId: number;
  customer: string;
  orderMade: Date;
  totalPrice: number;
  products: Array<Cart>;
}
