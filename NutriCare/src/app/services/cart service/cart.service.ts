import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  getCartByUserId(userId: number): Observable<ShoppingCartDTO> {
    return this.http.get<ShoppingCartDTO>(`${this.apiUrl}/get`, {
      params: { userId: userId.toString() },
    });
  }
}
