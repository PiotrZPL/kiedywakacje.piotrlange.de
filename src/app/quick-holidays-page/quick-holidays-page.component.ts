import { Component } from '@angular/core';
import { formatweeksword, formatdaysword, formathoursword, formatminutesword } from '../utilities';
import { formatseconds } from '../utilities';

@Component({
  selector: 'app-quick-holidays-page',
  templateUrl: './quick-holidays-page.component.html',
  styleUrls: ['./quick-holidays-page.component.scss']
})
export class QuickHolidaysPageComponent {
  holidayDate = new Date(2024, 3, 26, 0, 0, 0, 0);
  schoolYearStartDate = new Date(2023, 8, 4, 0, 0, 0, 0);
  nowDate: number = 0;
  totalSchoolYearTime: number = 0;
  timeLeft: number = 0;
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  hoursLeft: number = 0;
  daysLeft: number = 0;
  weeksLeft: number = 0;
  percentLeft: number = 0;
  secondsLeftShow: string = "0";

  weeksWord: string = "";
  daysWord: string = "";
  hoursWord: string = "";
  minutesWord: string = "";

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
    this.secondsLeftShow = formatseconds(this.secondsLeft);

    this.weeksWord = formatweeksword(this.weeksLeft);
    this.daysWord = formatdaysword(this.daysLeft);
    this.hoursWord = formathoursword(this.hoursLeft);
    this.minutesWord = formatminutesword(this.minutesLeft);
  }
}
