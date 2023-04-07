import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-page',
  templateUrl: './easter-page.component.html',
  styleUrls: ['./easter-page.component.scss']
})
export class EasterPageComponent {
  easterDate: Date[] = [
    new Date(2023, 3, 6, 0, 0, 0, 0),
    new Date(2024, 2, 28, 0, 0, 0, 0),
    new Date(2025, 3, 17, 0, 0, 0, 0),
    new Date(2026, 3, 2, 0, 0, 0, 0)
  ]

}
