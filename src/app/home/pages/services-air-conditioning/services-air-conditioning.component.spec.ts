import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAirConditioningComponent } from './services-air-conditioning.component';

describe('ServicesAirConditioningComponent', () => {
  let component: ServicesAirConditioningComponent;
  let fixture: ComponentFixture<ServicesAirConditioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesAirConditioningComponent]
    });
    fixture = TestBed.createComponent(ServicesAirConditioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
