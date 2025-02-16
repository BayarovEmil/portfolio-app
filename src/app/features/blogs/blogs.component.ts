import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogComponent {
  blogPosts = [
    {
      imageUrl: 'assets/blog1.jpg',
      title: "The Lawyers Collective Women's Rights Initiative",
      date: 'JUNE 14, 2019'
    },
    {
      imageUrl: 'assets/blog2.jpg',
      title: 'Legal Documents Every Landlord Needs',
      date: 'JUNE 20, 2019'
    },
    {
      imageUrl: 'assets/blog3.jpg',
      title: 'Help Us Make the Law Accessible for Everyone',
      date: 'JUNE 23, 2019'
    },
    {
      imageUrl: 'assets/blog4.jpg',
      title: '5 Legal Documents for Military Service People',
      date: 'JUNE 12, 2019'
    }
  ];
}
