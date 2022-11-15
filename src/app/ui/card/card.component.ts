import { products } from './../../data/products';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/card';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card__inner">
        <app-badge *ngIf="product.badge"  [infoBadge]="product.badge"></app-badge>
        <figure class="card__gallery">
          <img class="card__gallery-image" [src]="product.image">
        </figure>
        <div class="card__color-options">
          <app-color-option  [colors]="product.colors"></app-color-option>
        </div>
        <div class="card__company">{{product.company}}</div>
        <div class="card__title">{{product.title}}</div>

        <div class="card__rates">
          <app-rating *ngIf="product.rating?.value" [rating]="product.rating?.value"></app-rating>
          <span *ngIf="product.rating?.reviews" class="card__reviews">{{numReviews(product.rating?.reviews)}}</span>
        </div>
        <app-price *ngIf="product.price" [price]="product.price"></app-price>

        <div class="card__actions"></div>
        <!-- <app-icon></app-icon> -->
        <app-button [text]="'Добавить в корзину'"></app-button>
      </div>
      <!-- <app-delivery-options></app-delivery-options> -->
    </div>

  `,
  styles: [
    `
    .card {
      display: inline-block;
      max-width: 320px;
      min-height: 550px;
      padding: 15px 15px;
      margin-right: 30px;
      margin-bottom: 30px
    }
    .card__gallery-image {
      max-width: 248px;
      max-height: 334px;
    }
    .card__rates {
      display: flex;
      align-items: center;

    }
   `
  ]
})
export class CardComponent implements OnInit {
  @Input() product: Product

  constructor() { }

  ngOnInit(): void {
  }


  numReviews(value: number | undefined) {
    if (value) {
      value = Math.abs(value) % 100;
      let num = value % 10;
      if (value > 10 && value < 20) return `${value} отзывов`;
      if (num > 1 && num < 5) return `${value} отзыва`;
      if (num == 1) return `${value} отзыв`;
    }
    return `${value} отзывов`;


  }



}
