import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
  email: string = "elmarbayarov@gmail.com";

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlFragment = this.router.url.split('#')[1];
        if (urlFragment) {
          setTimeout(() => this.scrollToSection(urlFragment), 100);
        }
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    // Checkbox-un dəyərini birbaşa dəyişirik
    setTimeout(() => {
      this.updateCheckbox();
      this.cdr.detectChanges(); // UI-ni məcburi yeniləyirik
    }, 0);
  }

  closeMenu() {
    this.menuOpen = false;

    // Checkbox-un dəyərini birbaşa dəyişirik
    setTimeout(() => {
      this.updateCheckbox();
      this.cdr.detectChanges(); // UI-ni məcburi yeniləyirik
    }, 0);
  }

  updateCheckbox() {
    const checkbox = document.getElementById("mycheckbox") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = this.menuOpen;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const newElement = document.getElementById(sectionId);
          if (newElement) {
            newElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      });
    }

    this.closeMenu(); // Hamburger menyunu bağla
  }
}
