import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {JsonServiceService} from "../../../services/json-service.service";


@Component({
  selector: 'app-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services: any[] = []; // JSON-dan gələn məlumatları saxlayacağıq

  constructor(
    private router: Router,
    private jsonServiceService: JsonServiceService
  ) {}

  ngOnInit() {
    this.jsonServiceService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Səhifənin yuxarı hissəsinə smooth keçid
    });
  }
}
