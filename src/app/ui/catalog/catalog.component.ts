import { Product } from './../../types/card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  template: `
    <div class="catalog">
      <app-card [product]="product" *ngFor="let product of products"></app-card>
    </div>
  `,
  styles: [
    `.catalog {
  display:flex;
  align-items: center;
  flex-wrap: wrap;
}`
  ]
})
export class CatalogComponent implements OnInit {
  @Input() products: Product[]

  constructor() { }

  ngOnInit(): void {
  }

}
