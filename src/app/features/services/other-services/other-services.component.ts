import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss']
})
export class OtherServicesComponent implements OnInit {
  @Input() serviceId!: number;  // Mövcud xidmətin ID-si
  filteredServices: any[] = [];

  services = [
    { id: 1, name: 'Müqavilələrin hazırlanması və hüquqi ekspertizası', image: 'assets/images/service1.jpg' },
    { id: 2, name: 'Miqrasiya hüququ üzrə', image: 'assets/images/service2.jpg' },
    { id: 3, name: 'Korporativ hüquq', image: 'assets/images/service3.jpg' },
    { id: 4, name: 'Texnologiya hüququ üzrə', image: 'assets/images/service4.jpg' },
    { id: 5, name: 'Əqli mülkiyyət hüququ üzrə', image: 'assets/images/service5.jpg' },
    { id: 6, name: 'Əmək hüququ üzrə', image: 'assets/images/service6.jpg' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredServices = this.services.filter(service => service.id !== this.serviceId);
  }

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]);
  }
}
