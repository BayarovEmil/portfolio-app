import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-blogs',
  templateUrl: './other-blogs.component.html',
  styleUrls: ['./other-blogs.component.scss']
})
export class OtherBlogsComponent implements OnInit {
  @Input() blogId!: number;  // Mövcud blogun ID-si
  filteredBlogs: any[] = [];

  blogs = [
    { id: 1, author: 'Fuad Gashamov', title: 'Introduction to the New Arbitration Law', image: 'assets/images/blog1.jpg' },
    { id: 2, author: 'Ruslan Bayramov', title: 'Contracts as the all-powerful tool', image: 'assets/images/blog2.jpg' },
    { id: 3, author: 'Emin Musayev', title: 'Procedure for sale and purchase of shares of a company in Azerbaijan', image: 'assets/images/blog3.jpg' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredBlogs = this.blogs.filter(blog => blog.id !== this.blogId);
  }

  navigateToDetail(blog: any) {
    this.router.navigate(['/blog-details', blog.id]);
  }
}
