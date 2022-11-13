import { MenuModule } from '../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { DropDownComponent } from './drop-down.component';



@NgModule({
  declarations: [DropDownComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule
  ],
  exports: [DropDownComponent]
})
export class DropDownModule { }
