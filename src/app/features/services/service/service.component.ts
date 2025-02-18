import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services = [
    { id: 1, name: 'Müqavilələrin hazırlanması və hüquqi ekspertizası', image: 'assets/images/service1.jpg' },
    { id: 2, name: 'Miqrasiya hüququ üzrə', image: 'assets/images/service2.jpg' },
    { id: 3, name: 'Korporativ hüquq', image: 'assets/images/service3.jpg' },
    { id: 4, name: 'Texnologiya hüququ üzrə', image: 'assets/images/service4.jpg' },
    { id: 5, name: 'Əqli mülkiyyət hüququ üzrə', image: 'assets/images/service5.jpg' },
    { id: 6, name: 'Əmək hüququ üzrə', image: 'assets/images/service6.jpg' },
  ];

  constructor(private router: Router) {}

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]);
  }
}
