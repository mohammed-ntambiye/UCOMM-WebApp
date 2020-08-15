import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { InfoCardComponent } from './Shared/info-card/info-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { PersonInfoCardComponent } from './Shared/person-info-card/person-info-card.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    InfoCardComponent,
    AboutUsComponent,
    ContactUsComponent,
    MeetTheTeamComponent,
    PersonInfoCardComponent,
    UsefulLinksComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
