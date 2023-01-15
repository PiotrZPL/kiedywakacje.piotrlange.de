import { Component } from '@angular/core';

@Component({
  selector: 'app-christmas-page',
  templateUrl: './christmas-page.component.html',
  styleUrls: ['./christmas-page.component.scss']
})
export class ChristmasPageComponent {
  christmasDate: Date = new Date(2023, 11, 23, 0, 0, 0, 0)

}
