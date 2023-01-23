import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayPageComponent } from './may-page.component';

describe('MayPageComponent', () => {
  let component: MayPageComponent;
  let fixture: ComponentFixture<MayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
