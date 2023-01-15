import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCountdownComponent } from './standard-countdown.component';

describe('StandardCountdownComponent', () => {
  let component: StandardCountdownComponent;
  let fixture: ComponentFixture<StandardCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
