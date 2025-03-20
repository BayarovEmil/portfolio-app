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
  blog: BlogResponse | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';

  @Input() imageUrl: string = 'assets/lawyer-portrait.jpg';

  constructor(private route: ActivatedRoute, private blogService: BlogControllerService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // ✅ ID-ni `number` formatına çeviririk

      if (!isNaN(id) && id > 0) {
        this.getBlogById(id);
      } else {
        this.errorMessage = 'Yanlış blog ID-si!';
        this.isLoading = false;
      }
    });
  }

  getBlogById(id: number) {
    const params: GetById$Params = { 'blog-id': id };
    console.log("Sorgu gonderildi");

    this.blogService.getById(params).subscribe({
      next: (response: ApiResponseBlogResponse) => {
        if (response?.data) {
          this.blog = response.data;
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
