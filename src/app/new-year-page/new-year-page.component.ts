import { Component } from '@angular/core';

@Component({
  selector: 'app-new-year-page',
  templateUrl: './new-year-page.component.html',
  styleUrls: ['./new-year-page.component.scss']
})
export class NewYearPageComponent {
  nowDate: Date = new Date();
  newYearDate: Date = new Date();

  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.nowDate = new Date();
    this.newYearDate = new Date(this.nowDate.getFullYear() + 1, 0, 1);
  }

}
