// useful-links.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent {
  @Input() links: { name: string; logo: string; url: string }[] = [];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
