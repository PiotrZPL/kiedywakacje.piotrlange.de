import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysPageComponent } from './holidays-page.component';

describe('DaysToItComponent', () => {
  let component: HolidaysPageComponent;
  let fixture: ComponentFixture<HolidaysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
