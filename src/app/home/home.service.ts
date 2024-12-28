import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class HomeService {
  #http = inject(HttpClient);

  getProducts() {
    return this.#http.get<Product[]>('http://localhost:3000/products');
  }
}
