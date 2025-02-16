import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  services = [
    'Business Law',
    'Family Law',
    'Civil Litigation',
    'Employment Law',
    'Criminal Law'
  ];

  showServices: boolean = false;

  toggleServiceList() {
    this.showServices = this.formData.service === 'Family Law';
  }

  submitForm() {
    console.log('Form Submitted:', this.formData);
    alert('Your consultation request has been submitted.');
  }
}
