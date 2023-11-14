import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  id: number;
  name: string;
  value: string;
  alt: string;
}

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.css'],
})
export class LangsComponent implements OnInit {
  selectedLanguage?: Language;
  toggleOptions: boolean = false;

  readonly LANGS: Array<Language> = [
    {
      id: 1,
      name: 'cat.png',
      value: 'ca',
      alt: 'Catalan Flag',
    },
    {
      id: 2,
      name: 'esp.jpg',
      value: 'es',
      alt: 'Spanish Flag',
    },
    {
      id: 3,
      name: 'eng.png',
      value: 'en',
      alt: 'English Flag',
    },
  ];

  constructor(private readonly _translate: TranslateService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.LANGS.find(
      (lang) =>
        lang.value === (localStorage.getItem('preferredLanguage') ?? 'ca')
    );
  }

  onSelectLang(lang: string): void {
    localStorage.setItem('preferredLanguage', lang);
    this._translate.use(lang);
    this.selectedLanguage = this.LANGS.find((_lang) => _lang.value === lang);
  }

  onToggleOptions(): void {
    this.toggleOptions = !this.toggleOptions;
  }
}
