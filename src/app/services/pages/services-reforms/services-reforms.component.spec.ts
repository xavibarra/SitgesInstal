import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesReformsComponent } from './services-reforms.component';

describe('ServicesReformsComponent', () => {
  let component: ServicesReformsComponent;
  let fixture: ComponentFixture<ServicesReformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesReformsComponent]
    });
    fixture = TestBed.createComponent(ServicesReformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
