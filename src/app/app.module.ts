import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AnnualSummitComponent } from './components/annual-summit/annual-summit.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BraveMagazineComponent } from './components/brave-magazine/brave-magazine.component';
import { BusinessResourcesComponent } from './components/business-resources/business-resources.component';
import { CampusTourComponent } from './components/campus-tour/campus-tour.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { IndexComponent } from './components/index/index.component';
import { MainComponent } from './components/main/main.component';
import { MasterclassComponent } from './components/masterclass/masterclass.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { SincerelyBraveComponent } from './components/sincerely-brave/sincerely-brave.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnnualSummitComponent,
    BlogDetailsComponent,
    BlogComponent,
    BraveMagazineComponent,
    BusinessResourcesComponent,
    CampusTourComponent,
    ContactComponent,
    GalleryComponent,
    IndexComponent,
    MainComponent,
    MasterclassComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    ServicesComponent,
    SincerelyBraveComponent,
  
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
