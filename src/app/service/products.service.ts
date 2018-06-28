import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../interface/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  public fetchProducts () : Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:5555/products');
  }

  public addProducts (product : Product) : Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:5555/products', product);
  }

  public deleteProducts (id : string) : Observable<Product> {
    const url = `http://localhost:5555/products/${id}`;
    return this.httpClient.delete<Product>(url);
  }

  public updateProducts (product : Product) : Observable<Product> {
    const url = `http://localhost:5555/products/${product.id}`;
    return this.httpClient.put<Product>(url, product);
  }
}
