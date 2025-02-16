import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services = [
    {
      icon: 'fas fa-briefcase', // İş qanunu üçün çanta ikonu
      title: 'Business Law',
      description: 'Business law deals with the creation of new businesses and the issues that arise as existing.'
    },
    {
      icon: 'fas fa-users', // Ailə qanunu üçün insanlar ikonu
      title: 'Family Law',
      description: 'Family law attorneys help their clients file for separation or divorce, alimony or child custody.'
    },
    {
      icon: 'fas fa-balance-scale', // Məhkəmə prosesləri üçün ədalət tərəzisi ikonu
      title: 'Civil Litigation',
      description: 'Civil litigation is the process in which civil matters are resolved in a court of law.'
    }
  ];
}
