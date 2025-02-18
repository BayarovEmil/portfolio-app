import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // 🔹 ROUTING MODULUNU IMPORT ET!
import { RouterModule } from '@angular/router';  // 🔹 ROUTERMODULE-İ DAXİL ET!
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeroComponent } from './features/hero/hero.component';
import {AboutComponent} from "./features/about/about.component";
import {ContactComponent} from "./features/contact/contact.component";
import {FormsModule} from "@angular/forms";
import {ServiceComponent} from "./features/services/service/service.component";
import { ServiceDetailComponent } from './features/services/service-detail/service-detail.component';
import { OtherServicesComponent } from './features/services/other-services/other-services.component';
import {BlogComponent} from "./features/blogs/blog/blog.component";
import { BlogDetailsComponent } from './features/blogs/blog-details/blog-details.component';
import { OtherBlogsComponent } from './features/blogs/other-blogs/other-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ServiceComponent,
    ServiceDetailComponent,
    OtherServicesComponent,
    BlogDetailsComponent,
    OtherBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // 🔹 ƏLAVƏ OLUNMALIDIR!
    RouterModule,
    FormsModule,
    // 🔹 ROUTER MODULU DAXİL EDİLMƏLİDİR!
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
