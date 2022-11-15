import { ProductColors } from './../../types/card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-option',
  template: `
      <button class=" btn card__color-option" *ngFor="let available of colorsCollection"
      [ngStyle]="{'background-color': available.color, 'border-color': available.color === 'white' ? 'grey' : available.color}"
      ></button>
  `,
  styles: [
    `
    .card__color-option {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-right: 5px;
      padding: 0;
    }
    `
  ]
})
export class ColorOptionComponent implements OnInit {
  @Input() colors: {} = {}
  constructor() { }


  get colorsCollection(): ProductColors[] {
    return Object.values(this.colors)
  }

  ngOnInit(): void {
  }

}
