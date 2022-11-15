import { RatingModule } from './../rating/rating.module';
import { ColorOptionModule } from './../color-option/color-option.module';
import { BadgeModule } from './../badge/badge.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { PriceModule } from '../price/price.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    ColorOptionModule,
    RatingModule,
    PriceModule
  ],
  exports: [CardComponent]

})
export class CardModule { }
