import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    component: SignupComponent,
    loadChildren: () => import('./public/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
];