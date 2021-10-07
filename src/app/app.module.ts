import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsblockComponent } from './newsblock/newsblock.component';
import { NewsblockdetailsComponent } from './newsblockdetails/newsblockdetails.component';
import { NewscategoryComponent } from './newscategory/newscategory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { NewselementComponent } from './newselement/newselement.component';
import { NewsfooterComponent } from './newsfooter/newsfooter.component';
import { NewsheaderComponent } from './newsheader/newsheader.component';
import { NewnewsComponent } from './newnews/newnews.component';
import { NewstrendingComponent } from './newstrending/newstrending.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsblockComponent,
    NewsblockdetailsComponent,
    NewscategoryComponent,
    ContactUsComponent,
    NewsdetailsComponent,
    NewselementComponent,
    NewsfooterComponent,
    NewsheaderComponent,
    NewnewsComponent,
    NewstrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
