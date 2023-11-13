import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSolarPanelComponent } from './services-solar-panel.component';

describe('ServicesSolarPanelComponent', () => {
  let component: ServicesSolarPanelComponent;
  let fixture: ComponentFixture<ServicesSolarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSolarPanelComponent]
    });
    fixture = TestBed.createComponent(ServicesSolarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
