import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { ServiceComponent } from './pages/service/service.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ServiceComponent],
  imports: [CommonModule, TranslateModule, ServicesRoutingModule],
})
export class ServicesModule {}
