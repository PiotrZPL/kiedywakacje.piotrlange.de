import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasPageComponent } from './christmas-page.component';

describe('ChristmasPageComponent', () => {
  let component: ChristmasPageComponent;
  let fixture: ComponentFixture<ChristmasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
