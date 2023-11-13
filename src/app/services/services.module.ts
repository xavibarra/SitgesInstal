import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { NavBarServicesComponent } from './components/nav-bar-services/nav-bar-services.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServicesAirConditioningComponent } from './pages/services-air-conditioning/services-air-conditioning.component';
import { ServicesElectricalComponent } from './pages/services-electrical/services-electrical.component';
import { ServicesGasComponent } from './pages/services-gas/services-gas.component';
import { ServicesHeatingComponent } from './pages/services-heating/services-heating.component';
import { ServicesPlumbingComponent } from './pages/services-plumbing/services-plumbing.component';
import { ServicesReformsComponent } from './pages/services-reforms/services-reforms.component';
import { ServicesRepairsComponent } from './pages/services-repairs/services-repairs.component';
import { ServicesSolarPanelComponent } from './pages/services-solar-panel/services-solar-panel.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    NavBarServicesComponent,
    ServicesAirConditioningComponent,
    ServicesElectricalComponent,
    ServicesHeatingComponent,
    ServicesGasComponent,
    ServicesPlumbingComponent,
    ServicesReformsComponent,
    ServicesRepairsComponent,
    ServicesSolarPanelComponent,
    ServiceComponent,
  ],
  imports: [CommonModule, TranslateModule, ServicesRoutingModule],
})
export class ServicesModule {}
