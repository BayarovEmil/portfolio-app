import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogResponse } from '../../../services/models/blog-response';
import { BlogControllerService } from '../../../services/services/blog-controller.service';
import { GetById$Params } from '../../../services/fn/blog-controller/get-by-id';
import { ApiResponseBlogResponse } from '../../../services/models/api-response-blog-response';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: BlogResponse | null = null; // Dəyişəni `null` olaraq tərif edirik
  isLoading = true;
  errorMessage = '';

  @Input() imageUrl: string = 'assets/lawyer-portrait.jpg';

  constructor(private route: ActivatedRoute, private blogService: BlogControllerService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBlogById(id);
    }
  }

  getBlogById(id: number) {
    const params: GetById$Params = { 'blog-id': id };

    this.blogService.getById(params).subscribe({
      next: (response: ApiResponseBlogResponse) => {
        if (response && response.data) {
          this.blog = response.data; // `data` hissəsini `blog` obyektinə təyin edirik
        } else {
          this.errorMessage = 'Blog məlumatı tapılmadı.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Blog məlumatı yüklənərkən xəta:', error);
        this.errorMessage = 'Blog məlumatı yüklənərkən xəta baş verdi.';
        this.isLoading = false;
      }
    });
  }
}
