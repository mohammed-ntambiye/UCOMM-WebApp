import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoCardComponent } from './Shared/info-card/info-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'card', component: InfoCardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'meet-the-team', component: MeetTheTeamComponent},
  { path: 'useful-links', component: UsefulLinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }