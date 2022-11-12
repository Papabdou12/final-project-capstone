import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerListUserComponent } from './passenger-list-user.component';

describe('PassengerListUserComponent', () => {
  let component: PassengerListUserComponent;
  let fixture: ComponentFixture<PassengerListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
