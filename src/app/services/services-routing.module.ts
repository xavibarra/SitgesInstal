import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: ':serviceId',
    component: ServiceComponent,
  },
  // {
  //   path: 'air-conditioning',
  //   component: ServicesAirConditioningComponent,
  // },
  // {
  //   path: 'electrical',
  //   component: ServicesElectricalComponent,
  // },
  // {
  //   path: 'gas',
  //   component: ServicesGasComponent,
  // },
  // {
  //   path: 'heating',
  //   component: ServicesHeatingComponent,
  // },
  // {
  //   path: 'plumbing',
  //   component: ServicesPlumbingComponent,
  // },
  // {
  //   path: 'reforms',
  //   component: ServicesReformsComponent,
  // },
  // {
  //   path: 'repairs',
  //   component: ServicesRepairsComponent,
  // },
  // {
  //   path: 'solar-panels',
  //   component: ServicesSolarPanelComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
