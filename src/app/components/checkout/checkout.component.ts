import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Cart } from 'src/app/models/Cart';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems;
  orders;
  orderList: Order[] = [];

  orderForm = this.fb.group({
    customerName: ['', [Validators.required, Validators.minLength(2)]],
    customerEmail: ['', [Validators.required, Validators.email]],
    customerPayment: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private cart: CartService,
    private order: OrderService
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cart.showItems();
  }

  get customerEmail() {
    return this.orderForm.get('customerEmail') as FormControl;
  }
  get customerName() {
    return this.orderForm.get('customerName') as FormControl;
  }
  get customerPayment() {
    return this.orderForm.get('customerPayment') as FormControl;
  }

  placeOrder() {

    window.alert('Prepare the popcorns, your movies are on their way!');
    // window alert makes my e2e test fail.

    const customerDetails = this.orderForm.value;
    const orderDate = new Date();
    const newOrder = {
      companyId: 1732,
      createdBy: customerDetails.customerEmail,
      created: orderDate,
      paymentMethod: customerDetails.customerPayment,
      totalPrice: this.cart.totalPrice,
      status: 0,
      products: []
    };

    const detailsProducts = this.cartItems.map((movie) => {
      return {productId: movie.Id, name: movie.Name, amount: movie.quantity, orderId: 101 };
    });

    detailsProducts.forEach((orderedProduct) => {
      newOrder.products.push(orderedProduct);
    });

    this.order.createOrder(newOrder);
  }
}
