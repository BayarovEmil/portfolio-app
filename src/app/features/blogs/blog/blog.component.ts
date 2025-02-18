import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs = [
    { id: 1, author: 'Fuad Gashamov', title: 'Introduction to the New Arbitration Law in Azerbaijan', image: 'assets/images/blog1.jpg' },
    { id: 2, author: 'Ruslan Bayramov', title: 'Contracts as the all-powerful tool against the CEF', image: 'assets/images/blog2.jpg' },
    { id: 3, author: 'Emin Musayev', title: 'Procedure for sale and purchase of shares of a company in Azerbaijan', image: 'assets/images/blog3.jpg' },
  ];

  constructor(private router: Router) {}

  navigateToDetail(blog: any) {
    this.router.navigate(['/blog-details', blog.id]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Səhifənin yuxarı hissəsinə smooth keçid
    });
  }
}
