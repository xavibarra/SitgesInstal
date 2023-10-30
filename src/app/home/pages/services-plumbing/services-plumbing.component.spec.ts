import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPlumbingComponent } from './services-plumbing.component';

describe('ServicesPlumbingComponent', () => {
  let component: ServicesPlumbingComponent;
  let fixture: ComponentFixture<ServicesPlumbingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesPlumbingComponent]
    });
    fixture = TestBed.createComponent(ServicesPlumbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
