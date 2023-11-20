import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { GoogleReviewsComponent } from './components/google-reviews/google-reviews.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    ServiceCardComponent,
    OurWorkComponent,
    ContactComponent,
    VideoBackgroundComponent,
    GoogleReviewsComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    HomeRoutingModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
