import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinterbreakPageComponent } from "./winterbreak-page";
import { HolidaysPageComponent } from './holidays-page';
import { MainPageComponent } from './main-page';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "holidays", component: HolidaysPageComponent },
  { path: "winterbreak", component: WinterbreakPageComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
