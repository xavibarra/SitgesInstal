import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeatingComponent } from './services-heating.component';

describe('ServicesHeatingComponent', () => {
  let component: ServicesHeatingComponent;
  let fixture: ComponentFixture<ServicesHeatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesHeatingComponent]
    });
    fixture = TestBed.createComponent(ServicesHeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
