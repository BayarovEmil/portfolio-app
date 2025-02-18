import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: any;
  blogs = [
    { id: 1, author: 'Fuad Gashamov', title: 'Introduction to the New Arbitration Law', image: 'assets/images/blog1.jpg', content: 'Detailed article content...' },
    { id: 2, author: 'Ruslan Bayramov', title: 'Contracts as the all-powerful tool', image: 'assets/images/blog2.jpg', content: 'Detailed article content...' },
    { id: 3, author: 'Emin Musayev', title: 'Procedure for sale and purchase of shares', image: 'assets/images/blog3.jpg', content: 'Detailed article content...' },
  ];
  @Input() imageUrl: string = 'assets/lawyer-portrait.jpg';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find(blog => blog.id === id);
  }
}
