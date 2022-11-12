import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleModifiedComponent } from './schedule-modified.component';

describe('ScheduleModifiedComponent', () => {
  let component: ScheduleModifiedComponent;
  let fixture: ComponentFixture<ScheduleModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
