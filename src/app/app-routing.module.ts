import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import {ServiceComponent} from "./features/service/service.component";
import {BlogComponent} from "./features/blogs/blogs.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'blogs', component: BlogComponent },
  { path: '**', redirectTo: '' } // Yanlış URL olarsa, ana səhifəyə yönləndir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
