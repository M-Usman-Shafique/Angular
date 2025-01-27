import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth-guard.guard';
export const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
