import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  slides: string[] = [
    'assets/law-expert-bg1.jpg',  // Tünd göy rəngli fon
    'assets/law-expert-bg2.jpg'   // Alternativ slayd
  ];
  currentIndex: number = 0;
  currentBackground: string = this.slides[this.currentIndex];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.currentBackground = this.slides[this.currentIndex];
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.currentBackground = this.slides[this.currentIndex];
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
