import { TooltipModule } from './../tooltip/tooltip.module';
import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTooltipComponent } from './icon-tooltip.component';



@NgModule({
  declarations: [IconTooltipComponent],
  imports: [
    CommonModule,
    IconModule,
    TooltipModule
  ],
  exports: [IconTooltipComponent]
})
export class IconTooltipModule { }
