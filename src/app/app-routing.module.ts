import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoCardComponent } from './Shared/info-card/info-card.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'card', component: InfoCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }