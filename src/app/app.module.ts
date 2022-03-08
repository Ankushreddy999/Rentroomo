import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturedpropertiesComponent } from './home/featuredproperties/featuredproperties.component';
import { WhoweareComponent } from './home/whoweare/whoweare.component';
import { WhatwedoComponent } from './home/whatwedo/whatwedo.component';
import { WhyusComponent } from './home/whyus/whyus.component';
import { OurservicesComponent } from './home/ourservices/ourservices.component';
import { NeedhelpComponent } from './home/needhelp/needhelp.component';
import { OurtestimonialsComponent } from './home/ourtestimonials/ourtestimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturedpropertiesComponent,
    WhoweareComponent,
    WhatwedoComponent,
    WhyusComponent,
    OurservicesComponent,
    NeedhelpComponent,
    OurtestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
