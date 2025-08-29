import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-pages/dashboard-pages.component'),
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
