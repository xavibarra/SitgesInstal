import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { ServicesAirConditioningComponent } from './pages/services-air-conditioning/services-air-conditioning.component';
import { ServicesElectricalComponent } from './pages/services-electrical/services-electrical.component';
import { ServicesGasComponent } from './pages/services-gas/services-gas.component';
import { ServicesHeatingComponent } from './pages/services-heating/services-heating.component';
import { ServicesPlumbingComponent } from './pages/services-plumbing/services-plumbing.component';
import { ServicesReformsComponent } from './pages/services-reforms/services-reforms.component';
import { ServicesRepairsComponent } from './pages/services-repairs/services-repairs.component';
import { ServicesSolarPanelComponent } from './pages/services-solar-panel/services-solar-panel.component';
import { GoogleReviewsComponent } from './components/google-reviews/google-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarServicesComponent } from './components/nav-bar-services/nav-bar-services.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    ServiceCardComponent,
    OurWorkComponent,
    ContactComponent,
    NavBarComponent,
    VideoBackgroundComponent,
    ServicesAirConditioningComponent,
    ServicesElectricalComponent,
    ServicesGasComponent,
    ServicesHeatingComponent,
    ServicesPlumbingComponent,
    ServicesReformsComponent,
    ServicesRepairsComponent,
    ServicesSolarPanelComponent,
    GoogleReviewsComponent,
    FooterComponent,
    NavBarServicesComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    HomeRoutingModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
  ],
})
export class HomeModule {}
