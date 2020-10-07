import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockRegisterComponent } from './clock-register.component';

describe('ClockRegisterComponent', () => {
  let component: ClockRegisterComponent;
  let fixture: ComponentFixture<ClockRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
