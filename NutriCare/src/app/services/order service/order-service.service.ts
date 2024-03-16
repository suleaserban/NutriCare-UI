import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(userId: number, orderDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/placeOrder/${userId}`, orderDetails);
  }
}
