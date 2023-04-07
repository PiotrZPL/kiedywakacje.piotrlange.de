import { Component } from '@angular/core';
import { getNearestChristmas } from './nearest-christmas';

@Component({
  selector: 'app-christmas-page',
  templateUrl: './christmas-page.component.html',
  styleUrls: ['./christmas-page.component.scss']
})
export class ChristmasPageComponent {
  christmasDate: Date = getNearestChristmas()

  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.christmasDate = getNearestChristmas();
  }
}
