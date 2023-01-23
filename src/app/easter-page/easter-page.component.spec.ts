import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterPageComponent } from './easter-page.component';

describe('EasterPageComponent', () => {
  let component: EasterPageComponent;
  let fixture: ComponentFixture<EasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
