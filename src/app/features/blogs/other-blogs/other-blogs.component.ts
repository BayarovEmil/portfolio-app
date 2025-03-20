import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BlogResponse } from "../../../services/models/blog-response";
import { BlogControllerService } from "../../../services/services/blog-controller.service";
import { ApiResponsePageResponseBlogResponse } from "../../../services/models/api-response-page-response-blog-response";

@Component({
  selector: 'app-other-blogs',
  templateUrl: './other-blogs.component.html',
  styleUrls: ['./other-blogs.component.scss']
})
export class OtherBlogsComponent implements OnInit, OnChanges {
  @Input() blogId!: any;
  filteredBlogs: BlogResponse[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private router: Router, private apiService: BlogControllerService) {}

  ngOnInit() {
    if (!this.blogId || isNaN(this.blogId)) {
      this.isLoading = false;
      this.errorMessage = 'Invalid blog ID!';
    } else {
      this.loadOtherBlogs();
    }
  }

  // ✅ blogId hər dəfə dəyişəndə yenidən bloqları yükləyirik
  ngOnChanges(changes: SimpleChanges) {
    if (changes['blogId'] && !changes['blogId'].firstChange) {
      this.isLoading = true;
      this.loadOtherBlogs();
    }
  }

  loadOtherBlogs() {
    this.apiService.getAllBlogs({ page: 0, size: 10 }).subscribe({
      next: (response: ApiResponsePageResponseBlogResponse) => {
        if (response?.data?.content) {
          const currentBlogId = Number(this.blogId);
          this.filteredBlogs = response.data.content.filter(blog => Number(blog.id) !== currentBlogId);
        } else {
          this.errorMessage = 'No other blogs available!';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching other blogs:', error);
        this.errorMessage = 'Could not load blogs. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  navigateToDetail(blog: BlogResponse) {
    this.router.navigate(['/blog-details', blog.id]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }
}
