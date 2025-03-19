import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services: any[] = [];
  private jsonUrl = 'assets/services.json';
  getServices(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  ngOnInit(): void {
    this.getServices().subscribe(data => {
      this.services = data;
    });
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  navigateToDetail(service: any) {
    this.router.navigate(['/service-detail', service.id]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Səhifənin yuxarı hissəsinə smooth keçid
    });
  }
}
