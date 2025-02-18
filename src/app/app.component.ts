import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPageComponent: string | null = null;
  isDetailPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentComponent(event.urlAfterRedirects);
        this.isDetailPage = event.url.includes('/blog-details') || event.url.includes('/service-detail');
      }
    });
  }
  //
  //
  // constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.isDetailPage = event.url.includes('/blog-details') || event.url.includes('/service-detail');
  //     }
  //   });
  // }

  setCurrentComponent(url: string) {
    const routeMap: { [key: string]: string } = {
      '/about': 'about',
      '/services': 'services',
      '/contact': 'contact',
      '/blogs': 'blogs'
    };

    this.currentPageComponent = routeMap[url] || null;
  }
}
