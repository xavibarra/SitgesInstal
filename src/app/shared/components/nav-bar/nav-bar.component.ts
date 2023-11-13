import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
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
