import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeService, Product } from './home.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  template: `
    <h1>Products</h1>
    <ul>
      @for(product of products.value(); track product.id) {

      <li>{{ product.name }} - {{ product.price | currency }}</li>
      }
    </ul>

    @if(products.error()) {
    <p>Error: {{ products.error() }}</p>
    }
  `,
})
export default class HomeComponent {
  appService = inject(HomeService);

  products = rxResource<Product[], any>({
    loader: () => this.appService.getProducts(),
  });
}
