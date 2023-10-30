import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesAirConditioningComponent } from './pages/services-air-conditioning/services-air-conditioning.component';
import { ServicesElectricalComponent } from './pages/services-electrical/services-electrical.component';
import { ServicesGasComponent } from './pages/services-gas/services-gas.component';
import { ServicesHeatingComponent } from './pages/services-heating/services-heating.component';
import { ServicesPlumbingComponent } from './pages/services-plumbing/services-plumbing.component';
import { ServicesReformsComponent } from './pages/services-reforms/services-reforms.component';
import { ServicesRepairsComponent } from './pages/services-repairs/services-repairs.component';
import { ServicesSolarPanelComponent } from './pages/services-solar-panel/services-solar-panel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services/air-conditioning',
    component: ServicesAirConditioningComponent,
  },
  {
    path: 'services/electrical',
    component: ServicesElectricalComponent,
  },
  {
    path: 'services/gas',
    component: ServicesGasComponent,
  },
  {
    path: 'services/heating',
    component: ServicesHeatingComponent,
  },
  {
    path: 'services/plumbing',
    component: ServicesPlumbingComponent,
  },
  {
    path: 'services/reforms',
    component: ServicesReformsComponent,
  },
  {
    path: 'services/repairs',
    component: ServicesRepairsComponent,
  },
  {
    path: 'services/solar-panels',
    component: ServicesSolarPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
