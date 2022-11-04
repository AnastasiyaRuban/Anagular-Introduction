import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [DropDownModule],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [DropDownModule]
})
export class DropDownModule { }
