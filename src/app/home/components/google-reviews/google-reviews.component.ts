import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-google-reviews',
  templateUrl: './google-reviews.component.html',
  styleUrls: ['./google-reviews.component.css'],
})
export class GoogleReviewsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.head.appendChild(script);
  }
  redirectToReview() {
    const reviewUrl =
      'https://www.google.com/search?hl=es-ES&gl=es&q=Sitges+Instal.lacions,+Carrer+Verge+de+la+Llum,+6,+08870+Sitges,+Barcelona&ludocid=3225883531562896591&lsig=AB86z5VFRHU7boOJPly_X4dMPRXq#lrd=0x12a38143413f047f:0x2cc4a3fb0196cccf,3,,,,';
    window.location.href = reviewUrl;
  }
}
