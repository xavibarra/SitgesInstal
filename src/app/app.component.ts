import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  constructor(private readonly _translate: TranslateService) {}

  ngOnInit(): void {
    this._translate.addLangs(['en', 'es', 'ca']);

    const language = localStorage.getItem('preferredLanguage') ?? 'ca';
    localStorage.setItem('preferredLanguage', language);
    this._translate.use(language);
  }
}
