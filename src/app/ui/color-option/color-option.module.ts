import { ColorOptionComponent } from './../color-option/color-option.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ColorOptionComponent],
  imports: [
    CommonModule
  ],
  exports: [ColorOptionComponent]
})
export class ColorOptionModule { }
