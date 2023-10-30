import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarServicesComponent } from './nav-bar-services.component';

describe('NavBarServicesComponent', () => {
  let component: NavBarServicesComponent;
  let fixture: ComponentFixture<NavBarServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarServicesComponent]
    });
    fixture = TestBed.createComponent(NavBarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
