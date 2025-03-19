import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() name: string = 'Elmar Bayarov';
  @Input() title: string = '  Lawyer';
  @Input() quote: string = 'Since 2020, I have been working in the field of law, specializing in corporate law and contract law. I have worked as a legal consultant at Nexia Consulting and currently serve as a corporate lawyer at Azercell Telecom.  \n' +
    '\n' +
    'My goal is to provide you with tailored legal solutions to protect your business from legal risks.';
  @Input() imageUrl: string = 'assets/elmar.jpg';
}
