import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JsonServiceService} from "../../../json-service/json-service.service";
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service: any;
  services: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JsonServiceService
  ) {}

  ngOnInit() {
    this.jsonService.getServices().subscribe(data => {
      this.services = data;
      this.loadService();
    });
  }

  loadService() {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      this.service = this.services.find(s => s.id.toString() === serviceId);

    if (!this.service) {
      this.router.navigate(['/services']);
    }
  })
  }

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]);
  }
}
