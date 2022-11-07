import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModifiedComponent } from './booking-modified.component';

describe('BookingModifiedComponent', () => {
  let component: BookingModifiedComponent;
  let fixture: ComponentFixture<BookingModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
