import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRepairsComponent } from './services-repairs.component';

describe('ServicesRepairsComponent', () => {
  let component: ServicesRepairsComponent;
  let fixture: ComponentFixture<ServicesRepairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesRepairsComponent]
    });
    fixture = TestBed.createComponent(ServicesRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
