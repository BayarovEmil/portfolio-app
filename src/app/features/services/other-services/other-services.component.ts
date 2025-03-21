import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JsonServiceService} from "../../../json-service/json-service.service";

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss']
})
export class OtherServicesComponent implements OnInit {
  @Input() serviceId!: number;
  filteredServices: any[] = [];
  services: any[] = [];

  constructor(
    private router: Router,
    private jsonService: JsonServiceService
  ) {}

  ngOnInit() {
    this.jsonService.getServices().subscribe(data => {
      this.services = data;
      this.filteredServices = this.services.filter(service => service.id !== this.serviceId);
      this.filteredServices = this.filteredServices.slice(0, 3);
    });
  }

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
