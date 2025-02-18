import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service: any;
  services = [
    { id: 1, name: 'Müqavilələrin hazırlanması və hüquqi ekspertizası', image: 'assets/images/service1.jpg', details: ['Detay 1', 'Detay 2', 'Detay 3'] },
    { id: 2, name: 'Miqrasiya hüququ üzrə', image: 'assets/images/service2.jpg', details: ['Detay 1', 'Detay 2'] },
    { id: 3, name: 'Korporativ hüquq', image: 'assets/images/service3.jpg', details: ['Detay 1', 'Detay 2', 'Detay 3'] },
    { id: 4, name: 'Texnologiya hüququ üzrə', image: 'assets/images/service4.jpg', details: ['Detay 1', 'Detay 2'] },
    { id: 5, name: 'Əqli mülkiyyət hüququ üzrə', image: 'assets/images/service5.jpg', details: ['Detay 1', 'Detay 2'] },
    { id: 6, name: 'Əmək hüququ üzrə', image: 'assets/images/service6.jpg', details: ['Detay 1', 'Detay 2'] },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      if (serviceId) {
        this.service = this.services.find(s => s.id.toString() === serviceId);
      }
    });
  }

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]);
  }
}
