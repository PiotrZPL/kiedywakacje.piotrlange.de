import { Component, Input } from '@angular/core';
import { formatseconds } from '../utilities';
import { formatweeks } from '../utilities';

@Component({
  selector: 'app-standard-countdown',
  templateUrl: './standard-countdown.component.html',
  styleUrls: ['./standard-countdown.component.scss']
})
export class StandardCountdownComponent {
  nowDate: number = 0;
  timeLeft: number = 0;
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  hoursLeft: number = 0;
  daysLeft: number = 0;
  weeksLeft: number = 0;
  secondsLeftShow: string = "0";
  weeksWord: string = "";
  @Input() countdownDate: Date = new Date();

  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.nowDate = Date.now();
    this.timeLeft = this.countdownDate.getTime() - this.nowDate;
    this.secondsLeft = (this.timeLeft) / 1000;
    this.minutesLeft = ~~(this.secondsLeft / 60);
    this.hoursLeft = ~~(this.minutesLeft / 60);
    this.daysLeft = ~~(this.hoursLeft / 24);
    this.weeksLeft = ~~(this.daysLeft / 7);
    this.secondsLeftShow = formatseconds(this.secondsLeft);

    this.weeksWord = formatweeks(this.weeksLeft);
  }
}
