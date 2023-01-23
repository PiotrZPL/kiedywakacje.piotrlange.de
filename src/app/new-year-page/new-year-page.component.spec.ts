import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearPageComponent } from './new-year-page.component';

describe('NewYearPageComponent', () => {
  let component: NewYearPageComponent;
  let fixture: ComponentFixture<NewYearPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYearPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
