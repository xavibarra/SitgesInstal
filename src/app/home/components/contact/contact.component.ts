import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  url = 'https://formsubmit.co/info@sitgesinstal.com';

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.head.appendChild(script);
  }
  redirectToGoogleMaps() {
    const mapsUrl =
      'https://www.google.com/maps/place/Sitges+Instal.lacions/@41.2409207,1.8137813,18z/data=!4m6!3m5!1s0x12a38143413f047f:0x2cc4a3fb0196cccf!8m2!3d41.240939!4d1.8139375!16s%2Fg%2F11tf3xjfn1?hl=es-ES&entry=ttu';
    window.location.href = mapsUrl;
  }
}
