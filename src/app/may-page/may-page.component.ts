import { Component } from '@angular/core';

@Component({
  selector: 'app-may-page',
  templateUrl: './may-page.component.html',
  styleUrls: ['./may-page.component.scss']
})
export class MayPageComponent {
  mayBreakDate: Date = new Date(2024, 4, 1, 0, 0, 0, 0)

}
