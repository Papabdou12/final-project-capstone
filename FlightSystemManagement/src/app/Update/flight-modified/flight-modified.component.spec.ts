import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightModifiedComponent } from './flight-modified.component';

describe('FlightModifiedComponent', () => {
  let component: FlightModifiedComponent;
  let fixture: ComponentFixture<FlightModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
