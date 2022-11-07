import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiportDetailsComponent } from './aiport-details.component';

describe('AiportDetailsComponent', () => {
  let component: AiportDetailsComponent;
  let fixture: ComponentFixture<AiportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
