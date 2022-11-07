import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomAdminComponent } from './welcom-admin.component';

describe('WelcomAdminComponent', () => {
  let component: WelcomAdminComponent;
  let fixture: ComponentFixture<WelcomAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
