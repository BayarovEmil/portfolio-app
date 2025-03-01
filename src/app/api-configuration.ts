import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration {
  rootUrl: string = environment.apiUrl; // API URL-i environment faylından oxunur
}
