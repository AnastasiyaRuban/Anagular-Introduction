import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductRating } from 'src/app/types/card';

@Component({
  selector: 'app-rating',
  template: `
        <div class="card__rating">
      <input type="radio" id="rate5" name="rating" value="5" readonly [attr.checked]="isChecked(5)">
      <label for="rate5" title="Оценка «5»"></label>
      <input type="radio" id="rate4" name="rating" value="4" readonly [attr.checked]="isChecked(4)">
      <label for="rate4" title="Оценка «4»"></label>
      <input type="radio" id="rate3" name="rating" value="3" readonly [attr.checked]="isChecked(3)">
      <label for="rate3" title="Оценка «3»"></label>
      <input type="radio" id="rate2" name="rating" value="2" readonly [attr.checked]="isChecked(2)">
      <label for="rate2" title="Оценка «2»"></label>
      <input type="radio" id="rate1" name="rating" value="1" readonly [attr.checked]="isChecked(1)">
      <label for="rate1" title="Оценка «1»"></label>
</div>
  `,
  styles: [
    `.card__rating {
      overflow: hidden;
      width: fit-content;
    }

    .card__rating:not(:checked) > input {
      display: none;
    }

    .card__rating:not(:checked) > label {
      float: right;
      width: 21px;
      cursor: pointer;
      font-size: 16px;
      line-height: 32px;
      color: #DADADA;
    }

    .card__rating:not(:checked) > label:before {
      content: '★';
    }

    .card__rating > input:checked ~ label,
    .card__rating:not(:checked) > label:hover,
    .card__rating:not(:checked) > label:hover ~ label,
    .card__rating > input:checked + label:hover,
    .card__rating > input:checked + label:hover ~ label, {
      color: #FFBB00;
    }

    .card__rate > label:active {
      position: relative;
    }`
  ]
})


export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number | undefined;
  @Input() reviews: number;
  constructor() { }

  innerRating: number | undefined;
  innerReviews: number;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { rating, reviews } = changes;
    if (rating && rating.currentValue) {
      this.innerRating = rating.currentValue
      console.log(changes);
    }

    if (reviews && reviews.currentValue) {
      this.innerReviews = reviews.currentValue
    }
  }

  isChecked(value: number) {
    return this.rating === value ? '' : null
  }

}
