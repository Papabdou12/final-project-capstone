import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifiedComponent } from './user-modified.component';

describe('UserModifiedComponent', () => {
  let component: UserModifiedComponent;
  let fixture: ComponentFixture<UserModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
