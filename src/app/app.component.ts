import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web_sitgesinstal';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ca');

    // Verifica si hay un idioma guardado en el localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');

    // Si hay un idioma guardado, úsalo; de lo contrario, usa el idioma predeterminado (ca).
    if (savedLanguage) {
      translate.use(savedLanguage);
    } else {
      translate.use('ca');

      // Guarda el idioma predeterminado en el localStorage.
      localStorage.setItem('preferredLanguage', 'ca');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);

    // Guarda el idioma seleccionado en el localStorage.
    localStorage.setItem('preferredLanguage', language);
  }
}
