import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orderDTO';
import { OrderServiceService } from 'src/app/services/order service/order-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orders: Order[] = [];
  userId?: number;

  constructor(private orderService: OrderServiceService) {}

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('id')!);
    this.loadUserOrders();
  }

  loadUserOrders() {
    if (this.userId) {
      this.orderService.getOrdersByUserId(this.userId).subscribe({
        next: (data) => {
          this.orders = data;
        },
        error: (error) => {
          console.error('There was an error retrieving the orders', error);
        },
      });
    }
  }
}
