import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  pdfPath: string = 'assets/Drets de propietat.pdf';

  url = 'https://formsubmit.co/xbarrachinafont@gmail.com';

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.head.appendChild(script);
  }

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('JT56XVbQ9UQOQR04j');
    let response = await emailjs.send('service_5lxrxkq', 'template_6fvetab', {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      from_phone: this.form.value.from_phone,
      message: this.form.value.message,
    });

    alert('Your email has been sent');
    this.form.reset();
  }

  redirectToGoogleMaps() {
    const mapsUrl =
      'https://www.google.com/maps/place/Sitges+Instal.lacions/@41.2409207,1.8137813,18z/data=!4m6!3m5!1s0x12a38143413f047f:0x2cc4a3fb0196cccf!8m2!3d41.240939!4d1.8139375!16s%2Fg%2F11tf3xjfn1?hl=es-ES&entry=ttu';
    window.location.href = mapsUrl;
  }
}
