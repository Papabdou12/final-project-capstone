import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFlightModifiedComponent } from './schedule-flight-modified.component';

describe('ScheduleFlightModifiedComponent', () => {
  let component: ScheduleFlightModifiedComponent;
  let fixture: ComponentFixture<ScheduleFlightModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleFlightModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFlightModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
