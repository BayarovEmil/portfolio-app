import { Component } from '@angular/core';
import { UserControllerService } from '../../services/services/user-controller.service';
import {SendMessage$Params} from "../../services/fn/user-controller/send-message";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading = false;  // Yüklenme durumu
  errorMessage = '';  // Hata mesajı

  constructor(
    private userService: UserControllerService,
    private toastrService: ToastrService
  ) {}

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
    this.errorMessage = '';

    // Boş sahələri yoxlamaq üçün
    const invalidFields = [];

    if (!this.formData.name.trim()) invalidFields.push('name');
    if (!this.formData.phone.trim()) invalidFields.push('phone');
    if (!this.formData.email.trim()) invalidFields.push('email');
    if (!this.formData.service.trim()) invalidFields.push('service');
    if (!this.formData.message.trim()) invalidFields.push('message');

    if (invalidFields.length > 0) {
      this.highlightInvalidFields(invalidFields);
      return;
    }

    this.isLoading = true;

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
        this.toastrService.success('Your consultation request has been submitted successfully.');
        this.resetForm();
      },
      error: (error) => {
        this.errorMessage = 'Failed to send message. Please try again later.';
        this.toastrService.error(this.errorMessage);
        this.isLoading = false;
      }
    });
  }

// Xətalı inputları animasiya etmək üçün funksiya
  highlightInvalidFields(fields: string[]) {
    fields.forEach((field) => {
      const input = document.querySelector(`[name="${field}"]`) as HTMLElement;
      if (input) {
        input.classList.add('shake'); // Titrəyiş effekti verir
        setTimeout(() => input.classList.remove('shake'), 500); // 0.5 saniyə sonra effekti silir
      }
    });

    this.errorMessage = 'Zəhmət olmasa bütün sahələri doldurun!';
    this.toastrService.warning(this.errorMessage);
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
