import { Component, OnInit, NgModuleRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Cart } from 'src/app/models/Cart';
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
    customerName: [''],
    customerLastName: ['', [Validators.required, Validators.minLength(3)]],
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
  get customerLastName() {
    return this.orderForm.get('customerLastName') as FormControl;
  }
  get customerPayment() {
    return this.orderForm.get('customerPayment') as FormControl;
  }



  placeOrder() {

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
      return {productId: movie.movieId, amount: movie.quantity, orderId: 22 };
    });


    detailsProducts.forEach((orderedProduct) => {
      newOrder.products.push(orderedProduct);
    });

    console.log(newOrder);
    this.order.createOrder(newOrder);
  }
}
