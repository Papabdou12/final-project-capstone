import {DatePipe,  async,ComponentFixture, TestBed } from '@angular/core/testing';
// import { DatePipe } from '@angular/core/common';

import { ScheduleFlightListComponent } from './schedule-flight-list.component';

describe('ScheduleFlightListComponent', () => {
  let component: ScheduleFlightListComponent;
  let fixture: ComponentFixture<ScheduleFlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleFlightListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
