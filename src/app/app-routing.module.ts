import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetChewisComponent } from './pages/get-chewis/get-chewis.component';
import { WhitepaperComponent } from './pages/whitepaper/whitepaper.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'getChewis',
    component: GetChewisComponent
  },
  {
    path: 'whitepaper',
    component: WhitepaperComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
