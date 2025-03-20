import { Component } from '@angular/core';
import { UserControllerService } from '../../services/services/user-controller.service';
import {SendMessage$Params} from "../../services/fn/user-controller/send-message";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading = false;  // Yüklenme durumu
  errorMessage = '';  // Hata mesajı

  constructor(private userService: UserControllerService) {}

  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  services = [
    'Korporativ Hüquq',
    'Miqrasiya Hüququ',
    'Əqli Mülkiyyət',
    'Kommersiya və Müqavilələr Hüququ'
  ];

  showServices: boolean = false;

  toggleServiceList() {
    this.showServices = this.formData.service === 'Korporativ Hüquq';
  }

  submitForm() {
    this.isLoading = true;
    this.errorMessage = '';

    const params: SendMessage$Params = {
      username: this.formData.name,
      phoneNumber: this.formData.phone,
      email: this.formData.email,
      serviceName: this.formData.service,
      message: this.formData.message
    };

    this.userService.sendMessage(params).subscribe({
      next: () => {
        this.isLoading = false;
        alert('Your consultation request has been submitted successfully.');
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error sending message:', error);
        this.errorMessage = 'Failed to send message. Please try again later.';
      }
    });
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    };
  }
}
