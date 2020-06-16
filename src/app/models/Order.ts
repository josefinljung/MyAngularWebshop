import { Cart } from '../models/Cart';

export class Order {
  orderId?: number;
  companyId: number;
  createdBy: string;
  created: Date;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  products: Array<Cart>;
}
