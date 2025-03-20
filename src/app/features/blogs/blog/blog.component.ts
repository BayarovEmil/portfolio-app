import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetAllBlogs$Params} from "../../../services/fn/blog-controller/get-all-blogs";
import {BlogControllerService} from "../../../services/services/blog-controller.service";
import {BlogResponse} from "../../../services/models/blog-response";
import {ApiResponsePageResponseBlogResponse} from "../../../services/models/api-response-page-response-blog-response";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Array<BlogResponse> | undefined = [];  // Boş array başlat
  isLoading = true;

  constructor(private router: Router, private apiService: BlogControllerService) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    const params: GetAllBlogs$Params = {
      page: 0,
      size: 10
    };

    this.apiService.getAllBlogs(params).subscribe({
      next: (response: ApiResponsePageResponseBlogResponse) => {
        this.blogs = response.data?.content; // API'den dönen veriyi kullan
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Blogları çekerken hata oluştu:', error);
        this.isLoading = false;
      }
    });
  }

  navigateToDetail(blog: any) {
    this.router.navigate(['/blog-details', blog.id]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfanın başına geçiş
    });
  }

  protected readonly console = console;
}
