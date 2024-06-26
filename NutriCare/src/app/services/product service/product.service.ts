import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductDTO } from 'src/app/models/productDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.apiUrl}/products/${id}`);
  }

  getAllProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${this.apiUrl}/get-all-products`);
  }

  getRecommendedProducts(ids: number[]): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(
      `${this.apiUrl}/get-recommended-products`,
      {
        params: new HttpParams().set('ids', ids.join(',')),
      }
    );
  }

  getProductsByFactors(factors: string[]): Observable<ProductDTO[]> {
    let params = new HttpParams();
    factors.forEach((factor) => {
      params = params.append('productFactors', factor);
    });
    return this.http.get<ProductDTO[]>(
      `${this.apiUrl}/get-products-by-factors`,
      { params }
    );
  }
}
