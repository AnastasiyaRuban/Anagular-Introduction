import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { RatingComponent } from './rating/rating.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { IconTooltipComponent } from './icon-tooltip/icon-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RatingComponent,
    DropDownComponent,
    IconTooltipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
