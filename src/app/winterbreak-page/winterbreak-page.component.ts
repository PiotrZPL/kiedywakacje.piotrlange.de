import { Component } from '@angular/core';

@Component({
  selector: 'app-winterbreak-page',
  templateUrl: './winterbreak-page.component.html',
  styleUrls: ['./winterbreak-page.component.scss']
})
export class WinterbreakPageComponent {
  winterBreakDate = new Date(2024, 0, 29, 0, 0, 0, 0);
  nowDate: number = 0;
  timeLeft: number = 0;
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  hoursLeft: number = 0;
  daysLeft: number = 0;
  weeksLeft: number = 0;
  secondsLeftShow: string = "0";


  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.nowDate = Date.now();
    this.timeLeft = this.winterBreakDate.getTime() - this.nowDate;
    this.secondsLeft = (this.timeLeft) / 1000;
    this.minutesLeft = ~~(this.secondsLeft / 60);
    this.hoursLeft = ~~(this.minutesLeft / 60);
    this.daysLeft = ~~(this.hoursLeft / 24);
    this.weeksLeft = ~~(this.daysLeft / 7);
    this.secondsLeftShow = this.formatseconds(this.secondsLeft);

  }

  formatseconds(input: number): string {
    let stringinput: string = input.toString();
    let decimalpart: string = stringinput.split(".")[1];
    if (decimalpart.length === 0) {
      stringinput += "000";
    }
    else if (decimalpart.length === 1) {
      stringinput += "00";
    }
    else if (decimalpart.length === 2) {
      stringinput += "0";
    }
    return stringinput;
  }

}
