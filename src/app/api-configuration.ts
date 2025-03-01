import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration {
  rootUrl: string = environment.apiUrl; // API URL-i environment faylından oxunur
}
