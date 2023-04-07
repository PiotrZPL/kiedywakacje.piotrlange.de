import { Component } from '@angular/core';
import { getNearestEaster } from '../easter-page/nearest-easter';
import { getNearestChristmas } from '../christmas-page/nearest-christmas';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  easterYear: String = getNearestEaster().getFullYear().toString();
  christmasYear: String = getNearestChristmas().getFullYear().toString();

}
