import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AnnualSummitComponent } from './components/annual-summit/annual-summit.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BraveMagazineComponent } from './components/brave-magazine/brave-magazine.component';
import { BusinessResourcesComponent } from './components/business-resources/business-resources.component';
import { CampusTourComponent } from './components/campus-tour/campus-tour.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { MainComponent } from './components/main/main.component';
import { MasterclassComponent } from './components/masterclass/masterclass.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'app-header', component:HeaderComponent  },
  { path: 'app-about', component:AboutComponent  },
  { path: 'app-annual-summi', component:AnnualSummitComponent  },
  { path: 'app-blog', component:BlogComponent  },
  { path: 'app-blog-details', component:BlogDetailsComponent   },
  { path: 'app-brave-magazine', component:BraveMagazineComponent   },
  { path: 'app-business-resources', component:BusinessResourcesComponent  },
  { path: 'app-campus-tour', component:CampusTourComponent   },
  { path: 'app-contact', component:ContactComponent   },
  { path: 'app-gallery', component:GalleryComponent  },
  { path: 'app-footer', component:FooterComponent   },
  { path: 'app-index', component:IndexComponent  },
  { path: 'app-main', component:MainComponent  },
  { path: 'app-masterclass', component:MasterclassComponent  },
  { path: 'app-project-details', component:ProjectDetailsComponent   },
  { path: 'app-projects', component:ProjectsComponent  },
  { path: 'app-services', component: ServicesComponent   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [ 
  
  HeaderComponent,
  AboutComponent,
  AnnualSummitComponent ,
  BlogComponent,
  BlogDetailsComponent,
  BraveMagazineComponent,
  BusinessResourcesComponent,
  CampusTourComponent,
  ContactComponent,
  GalleryComponent,
  FooterComponent,
  IndexComponent,
  MainComponent,
  MasterclassComponent,
  ProjectDetailsComponent,
  ProjectsComponent,
  ServicesComponent

  
]
