import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGasComponent } from './services-gas.component';

describe('ServicesGasComponent', () => {
  let component: ServicesGasComponent;
  let fixture: ComponentFixture<ServicesGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesGasComponent]
    });
    fixture = TestBed.createComponent(ServicesGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
