import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar-services',
  templateUrl: './nav-bar-services.component.html',
  styleUrls: ['./nav-bar-services.component.css'],
})
export class NavBarServicesComponent implements OnInit {
  selectedLanguage: string | undefined;
  selectedFlag: string | undefined;
  optionsOpen: boolean = false;
  ngOnInit() {
    // Obtén el idioma preferido del localStorage, o establece "ca" si no está definido.
    this.selectedLanguage = localStorage.getItem('preferredLanguage') || 'ca';

    // Carga la bandera del idioma preferido.
    this.loadFlag();
  }
  constructor(private translate: TranslateService, private router: Router) {}
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
  goHome() {
    // Navega a la página de inicio
    this.router.navigate(['/']); // Asegúrate de que la ruta '/' coincida con tu página de inicio
  }
}
