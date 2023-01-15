import { Component } from '@angular/core';

@Component({
  selector: 'app-days-to-it',
  templateUrl: './days-to-it.component.html',
  styleUrls: ['./days-to-it.component.scss']
})
export class DaysToItComponent {
  holidayDate = new Date(2023, 5, 23, 0, 0, 0, 0);
  schoolYearStartDate = new Date(2022, 8, 1, 0, 0, 0, 0);
  nowDate: number = 0;
  totalSchoolYearTime: number = 0;
  timeLeft: number = 0;
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  hoursLeft: number = 0;
  daysLeft: number = 0;
  weeksLeft: number = 0;
  percentLeft: number = 0;


  constructor() {
    setInterval(() => 
      this.recalculateValues(),
      1
    )
  }

  recalculateValues() {
    this.nowDate = Date.now();
    this.totalSchoolYearTime = this.holidayDate.getTime() - this.schoolYearStartDate.getTime();
    this.timeLeft = this.holidayDate.getTime() - this.nowDate;
    this.secondsLeft = (this.timeLeft) / 1000;
    this.minutesLeft = ~~(this.secondsLeft / 60);
    this.hoursLeft = ~~(this.minutesLeft / 60);
    this.daysLeft = ~~(this.hoursLeft / 24);
    this.weeksLeft = ~~(this.daysLeft / 7);
    this.percentLeft = Math.round((this.timeLeft / this.totalSchoolYearTime) * 1000000)/10000;

  }

}
