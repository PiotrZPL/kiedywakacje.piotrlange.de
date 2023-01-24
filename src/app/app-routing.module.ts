import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinterbreakPageComponent } from "./winterbreak-page";
import { HolidaysPageComponent } from './holidays-page';
import { MainPageComponent } from './main-page';
import { ChristmasPageComponent } from './christmas-page';
import { EasterPageComponent } from './easter-page/';
import { MayPageComponent } from './may-page';
import { NewYearPageComponent } from './new-year-page';
import { QuickHolidaysPageComponent } from './quick-holidays-page';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "holidays", component: HolidaysPageComponent },
  { path: "winterbreak", component: WinterbreakPageComponent },
  { path: "christmas", component: ChristmasPageComponent },
  { path: "easter", component: EasterPageComponent },
  { path: "maybreak", component: MayPageComponent },
  { path: "newyear", component: NewYearPageComponent },
  { path: "quickholidays", component: QuickHolidaysPageComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
