import { Component, Input, OnInit } from '@angular/core';
import { ProductPrice } from 'src/app/types/card';

@Component({
  selector: 'app-price',
  template: `
    <div class="card__price">
      <div *ngIf="price.value" class="card__old-price">
        <span *ngIf="price.discount" class="card__old-price-value">{{price.value}}</span>
        <span *ngIf="price.discount" class="card__old-price-sale">{{price.discount | percent}}</span>
        <!-- <span *ngIf="price.discount" class="card__old-price-sale">{{price.discount*100}}%</span> -->
      </div>
      <div *ngIf="price.value && price.discount" class="card__new-price">{{newPrice}}</div>
    </div>


  `,
  styles: [
    `
    .card__old-price-value {
      margin-right: 5px;
      text-decoration: line-through;
      padding-right: 3px;
    }
    .card__old-price-value::after {
      content: "₽";
    }

    .card__old-price-sale {
      padding: 1px 3px;
      background-color: red;
      color: white;
      font-style: italic;
      font-weight: bold;
      border-radius: 0.325rem;
    }
    .card__new-price {
      color: red;
      font-size: 24px;
    }
    .card__new-price::after {
      content: "₽";
    }
    `
  ]
})
export class PriceComponent implements OnInit {
  @Input() price: ProductPrice

  get newPrice() {
    if (this.price.value && this.price.discount) {
      return Math.round(this.price.value * (1 - this.price.discount))
    }
    else {
      return
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
