import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import IOrder from './IOrder';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})

export class OrderService implements IOrder {

  orderList: Subject<Order[]> = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  showOrders(): void {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1732')
    .subscribe((orderData: any) => {
      const ordersFromApi: Order[] = orderData.map(order => {
        const orderFromApi = new Order();
        orderFromApi.orderId = order.id;
        orderFromApi.companyId = order.companyId;
        orderFromApi.created = order.created;
        orderFromApi.createdBy = order.createdBy;
        orderFromApi.paymentMethod = order.paymentMethod;
        orderFromApi.totalPrice = order.totalPrice;
        orderFromApi.status = order.status;
        orderFromApi.products = order.orderRows;
        return orderFromApi;
      });
      this.orderList.next(ordersFromApi);
    });
  }

  createOrder(order: Order) {
    this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', {
      companyId: 1732,
      created: order.created,
      createdBy: order.createdBy,
      paymentMethod: order.paymentMethod,
      totalPrice: order.totalPrice,
      status: order.status,
      orderRows: order.products,
  }).subscribe((orderData) => {
      console.log(orderData)
    });
  }

  removeOrder(orderToRemove: number): Observable<{}> {
    return this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + orderToRemove);
  }
}
