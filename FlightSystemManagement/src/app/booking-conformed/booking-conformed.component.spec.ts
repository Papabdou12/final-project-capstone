import { async,ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingConformedComponent } from './booking-conformed.component';

describe('BookingConformedComponent', () => {
  let component: BookingConformedComponent;
  let fixture: ComponentFixture<BookingConformedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingConformedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingConformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
