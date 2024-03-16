import { Component } from '@angular/core';
import { Order } from 'src/app/models/orderDTO';
import { OrderServiceService } from 'src/app/services/order service/order-service.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css'],
})
export class AdminComponentComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderServiceService) {}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (error) => {
        console.error('There was an error retrieving the orders', error);
      },
    });
  }

  changeOrderStatus(order: Order) {
    this.orderService
      .updateOrderStatus(order.id, order.status)
      .subscribe(() => {});
  }
}
