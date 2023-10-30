import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  constructor(private readonly _router: Router) {}

  airConditioningButton(): void {
    this._router.navigate(['/home/services/air-conditioning']);
  }
  electricalButton(): void {
    this._router.navigate(['/home/services/electrical']);
  }
  gasButton(): void {
    this._router.navigate(['/home/services/gas']);
  }
  heatingButton(): void {
    this._router.navigate(['/home/services/heating']);
  }
  plumbingButton(): void {
    this._router.navigate(['/home/services/plumbing']);
  }
  reformsButton(): void {
    this._router.navigate(['/home/services/reforms']);
  }
  repairsButton(): void {
    this._router.navigate(['/home/services/repairs']);
  }
  solarPanelsButton(): void {
    this._router.navigate(['/home/services/solar-panels']);
  }
}
