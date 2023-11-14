import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input()
  navbarType: 'home' | 'service' = 'home';

  constructor(public readonly _router: Router) {}

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
      )
        this.isMobileMenuOpen = false;
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
