import { Component } from '@angular/core';

@Component({
  selector: 'app-christmas-page',
  templateUrl: './christmas-page.component.html',
  styleUrls: ['./christmas-page.component.scss']
})
export class ChristmasPageComponent {
  nowDate: Date = new Date();
  christmasDate: Date[] = []

  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.nowDate = new Date();
    this.christmasDate = [new Date(this.nowDate.getFullYear(), 11, 23)];
  }
}
