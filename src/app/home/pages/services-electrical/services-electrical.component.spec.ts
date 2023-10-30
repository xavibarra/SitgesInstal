import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesElectricalComponent } from './services-electrical.component';

describe('ServicesElectricalComponent', () => {
  let component: ServicesElectricalComponent;
  let fixture: ComponentFixture<ServicesElectricalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesElectricalComponent]
    });
    fixture = TestBed.createComponent(ServicesElectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
