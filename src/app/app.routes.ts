import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-pages/dashboard-pages.component'),

    children: [
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search.component'),
      },
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending.component'),
      },
      {
        path: '**',
        redirectTo: 'trending'
      },
    ]

  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
