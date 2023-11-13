import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  constructor(private readonly _router: Router) {}

  goTo(route: string): void {
    this._router.navigate([`/services/${route}`]);
  }
}
