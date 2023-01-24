import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickHolidaysPageComponent } from './quick-holidays-page.component';

describe('QuickHolidaysPageComponent', () => {
  let component: QuickHolidaysPageComponent;
  let fixture: ComponentFixture<QuickHolidaysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickHolidaysPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickHolidaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
