import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-page',
  templateUrl: './easter-page.component.html',
  styleUrls: ['./easter-page.component.scss']
})
export class EasterPageComponent {
  easterDate: Date = new Date(2023, 3, 6, 0, 0, 0, 0)

}
