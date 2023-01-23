import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolidaysPageComponent } from './holidays-page/holidays-page.component';
import { WinterbreakPageComponent } from './winterbreak-page/winterbreak-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StandardCountdownComponent } from './standard-countdown/standard-countdown.component';
import { ChristmasPageComponent } from './christmas-page/christmas-page.component';
import { EasterPageComponent } from './easter-page/easter-page.component';
import { MayPageComponent } from './may-page/may-page.component';
import { NewYearPageComponent } from './new-year-page/new-year-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysPageComponent,
    WinterbreakPageComponent,
    MainPageComponent,
    StandardCountdownComponent,
    ChristmasPageComponent,
    EasterPageComponent,
    MayPageComponent,
    NewYearPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
