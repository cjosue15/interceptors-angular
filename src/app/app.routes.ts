import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'auth/no-auth',
    loadComponent: () => import('./auth/no-auth/no-auth.component'),
  },
];
