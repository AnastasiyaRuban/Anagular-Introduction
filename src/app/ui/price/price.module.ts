import { PriceComponent } from './price.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule
  ],
  exports: [PriceComponent]
})
export class PriceModule { }
