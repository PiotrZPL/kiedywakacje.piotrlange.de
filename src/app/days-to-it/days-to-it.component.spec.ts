import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysToItComponent } from './days-to-it.component';

describe('DaysToItComponent', () => {
  let component: DaysToItComponent;
  let fixture: ComponentFixture<DaysToItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysToItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysToItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
