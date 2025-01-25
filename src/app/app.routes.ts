import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GetAPIComponent } from './get-api/get-api.component';
export const routes: Routes = [
  {
    path: 'profile',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: GetAPIComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
