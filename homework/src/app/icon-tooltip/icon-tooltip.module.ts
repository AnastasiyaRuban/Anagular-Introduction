import { TooltipModule } from './../tooltip/tooltip.module';
import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [IconTooltipModule],
  imports: [
    CommonModule,
    IconModule,
    TooltipModule
  ],
  exports: [IconTooltipModule]
})
export class IconTooltipModule { }
