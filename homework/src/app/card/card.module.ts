import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { BadgeComponent } from '../badge/badge.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeComponent
  ],
  exports: [CardComponent]

})
export class CardModule { }
