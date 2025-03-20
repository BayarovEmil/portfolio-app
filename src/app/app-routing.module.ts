import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import {ServiceComponent} from "./features/services/service/service.component";
import {ServiceDetailComponent} from "./features/services/service-detail/service-detail.component";
import {BlogComponent} from "./features/blogs/blog/blog.component";
import {BlogDetailsComponent} from "./features/blogs/blog-details/blog-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'service-detail/:id', component: ServiceDetailComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: '**', redirectTo: '' } // Yanlış URL olarsa, ana səhifəyə yönləndir
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
