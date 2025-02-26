import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BlogResponse} from "../../../services/models/blog-response";
import {BlogControllerService} from "../../../services/services/blog-controller.service";
import {GetById$Params} from "../../../services/fn/blog-controller/get-by-id";
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: BlogResponse | null = null;
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
      next: (response) => {
        this.blog = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Blog detaylarını çekerken hata oluştu:', error);
        this.errorMessage = 'Blog detayları yüklenirken hata oluştu.';
        this.isLoading = false;
      }
    });
  }
}
