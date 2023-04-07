import { Component } from '@angular/core';
import { formatseconds } from '../utilities';

@Component({
  selector: 'app-winterbreak-page',
  templateUrl: './winterbreak-page.component.html',
  styleUrls: ['./winterbreak-page.component.scss']
})
export class WinterbreakPageComponent {
  winterBreakDate = [new Date(2024, 0, 29, 0, 0, 0, 0)];
}
