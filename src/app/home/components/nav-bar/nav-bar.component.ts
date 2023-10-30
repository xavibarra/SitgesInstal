import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  selectedLanguage: string | undefined;
  selectedFlag: string | undefined;
  optionsOpen: boolean = false;
  ngOnInit() {
    // Obtén el idioma preferido del localStorage, o establece "ca" si no está definido.
    this.selectedLanguage = localStorage.getItem('preferredLanguage') || 'ca';

    // Carga la bandera del idioma preferido.
    this.loadFlag();
  }
  constructor(private translate: TranslateService) {}
  toggleOptions() {
    this.optionsOpen = !this.optionsOpen;
    if (this.optionsOpen) {
      console.log('abierto');
    } else {
      console.log('cerrar');
    }
    console.log('menu banderas');
  }

  selectLanguage(language: string) {
    // Cierra las opciones después de un breve retraso (10ms).
    setTimeout(() => {
      this.optionsOpen = false;
    }, 10);

    // Actualiza el idioma seleccionado y la bandera.
    this.selectedLanguage = language;
    this.loadFlag();

    this.translate.use(language);

    // Guarda el idioma preferido en el localStorage.
    localStorage.setItem('preferredLanguage', language);
  }

  loadFlag() {
    // Carga la bandera según el idioma seleccionado.
    switch (this.selectedLanguage) {
      case 'ca':
        this.selectedFlag = 'assets/img/cat.png';
        break;
      case 'es':
        this.selectedFlag = 'assets/img/esp.jpg';
        break;
      case 'en':
        this.selectedFlag = 'assets/img/eng.png';
        break;
      default:
        this.selectedFlag = 'assets/img/cat.png';
    }
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  @HostListener('document:click', ['$event'])
  closeMobileMenuOnClickOutside(event: Event): void {
    if (this.isMobileMenuOpen) {
      const targetElement = event.target as HTMLElement;
      if (
        !targetElement.closest('.navbar-links') &&
        !targetElement.closest('.navbar-mobile')
      ) {
        // Si se hace clic fuera del menú y del botón hamburguesa, cierra el menú.
        this.isMobileMenuOpen = false;
      }
    }
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }
}
