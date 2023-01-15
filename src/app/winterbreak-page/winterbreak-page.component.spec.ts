import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterbreakPageComponent } from './winterbreak-page.component';

describe('WinterbreakPageComponent', () => {
  let component: WinterbreakPageComponent;
  let fixture: ComponentFixture<WinterbreakPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterbreakPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterbreakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
