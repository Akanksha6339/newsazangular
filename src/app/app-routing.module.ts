import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewnewsComponent } from './newnews/newnews.component';
import { NewsblockComponent } from './newsblock/newsblock.component';
import { NewsblockdetailsComponent } from './newsblockdetails/newsblockdetails.component';
import { NewscategoryComponent } from './newscategory/newscategory.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { NewselementComponent } from './newselement/newselement.component';
import { NewstrendingComponent } from './newstrending/newstrending.component';

const routes: Routes = [
  {
    path : "",
    component : NewstrendingComponent
  },
  {
    path : "home",
    component : NewstrendingComponent
  },
  {
    path : "newscategory",
    component : NewscategoryComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "newnews",
    component : NewnewsComponent
  },
  {
    path : "contactUs",
    component :  ContactUsComponent
  },
  {
    path : "newselement",
    component : NewselementComponent
  },
  {
    path : "newsblock",
    component :  NewsblockComponent
  },
  {
    path : "newsblockdetails",
    component :NewsblockdetailsComponent
  },
  {
    path : "newnews/:id",
    component : NewsdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
