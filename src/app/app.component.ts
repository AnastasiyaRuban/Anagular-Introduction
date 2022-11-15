import { Product } from './types/card';
import { products } from './data/products';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';
  apiUrl = `${environment.api}`;
  products: Product[] = products;
}
