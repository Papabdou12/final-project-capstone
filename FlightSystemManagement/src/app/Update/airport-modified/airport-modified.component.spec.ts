import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportModifiedComponent } from './airport-modified.component';

describe('AirportModifiedComponent', () => {
  let component: AirportModifiedComponent;
  let fixture: ComponentFixture<AirportModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
