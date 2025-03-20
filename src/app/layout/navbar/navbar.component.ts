import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
  email: string = "elmarbayarov@gmail.com";

  constructor(private router: Router) {
    // Routing başa çatdıqdan sonra scroll-u icra et
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlFragment = this.router.url.split('#')[1];
        if (urlFragment) {
          setTimeout(() => this.scrollToSection(urlFragment), 100);
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Əgər id tapılmadısa, əvvəl Home-a yönləndirib sonra scroll et
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const newElement = document.getElementById(sectionId);
          if (newElement) {
            newElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300); // Kiçik gecikmə ilə Home tam yüklənsin
      });
    }

    this.menuOpen = false; // Mobil menyunu bağla
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
