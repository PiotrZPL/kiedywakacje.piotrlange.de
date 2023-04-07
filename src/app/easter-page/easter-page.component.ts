import { Component } from '@angular/core';
import { getNearestEaster } from './nearest-easter';

@Component({
  selector: 'app-easter-page',
  templateUrl: './easter-page.component.html',
  styleUrls: ['./easter-page.component.scss']
})
export class EasterPageComponent {
  easterDate: Date = getNearestEaster();

}
