import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerModifiedComponent } from './passenger-modified.component';

describe('PassengerModifiedComponent', () => {
  let component: PassengerModifiedComponent;
  let fixture: ComponentFixture<PassengerModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
