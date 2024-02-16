import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private apiUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  getCartByUserId(userId: number): Observable<ShoppingCartDTO> {
    return this.http.get<ShoppingCartDTO>(`${this.apiUrl}/get`, {
      params: { userId },
    });
  }

  addItem(userId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString())
      .set('quantity', 1);
    return this.http.post(`${this.apiUrl}/add`, {}, { params });
  }

  removeItem(userId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString());
    return this.http.post(`${this.apiUrl}/remove`, {}, { params });
  }

  changeQuantity(
    userId: number,
    productId: number,
    change: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString())
      .set('change', change.toString());
    return this.http.post(`${this.apiUrl}/changeQuantity`, {}, { params });
  }
}
