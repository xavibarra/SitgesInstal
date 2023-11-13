import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { LangsComponent } from './components/langs/langs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, LangsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
