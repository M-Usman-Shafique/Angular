import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [authGuard],
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
    path: 'exclusive',
    component: ExclusiveComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
