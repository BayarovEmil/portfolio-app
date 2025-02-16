import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() name: string = 'Ryan Emberson';
  @Input() title: string = 'CEO at LawExpert';
  @Input() quote: string = 'When you place your case in the hands of our lawyers and paralegals, you are placing your case in the hands of professionals who are committed to achieving the best possible outcome.';
  @Input() imageUrl: string = 'assets/lawyer-portrait.jpg';
}
