import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from './ui/button/button.module';
import { BadgeModule } from './ui/badge/badge.module';
import { CardModule } from './ui/card/card.module';
import { DropDownModule } from './ui/drop-down/drop-down.module';
import { IconModule } from './ui/icon/icon.module';
import { IconTooltipModule } from './ui/icon-tooltip/icon-tooltip.module';
import { RatingModule } from './ui/rating/rating.module';
import { TooltipModule } from './ui/tooltip/tooltip.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuModule } from './ui/menu/menu.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BadgeModule,
    CardModule,
    DropDownModule,
    IconModule,
    IconTooltipModule,
    RatingModule,
    TooltipModule,
    MenuModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
