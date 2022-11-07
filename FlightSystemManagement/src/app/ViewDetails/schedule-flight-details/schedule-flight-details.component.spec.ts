import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFlightDetailsComponent } from './schedule-flight-details.component';

describe('ScheduleFlightDetailsComponent', () => {
  let component: ScheduleFlightDetailsComponent;
  let fixture: ComponentFixture<ScheduleFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleFlightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
