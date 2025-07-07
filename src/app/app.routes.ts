import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'specials',
    loadComponent: () => import('./specials/specials.page').then( m => m.SpecialsPage)
  },
  {
    path: 'menus',
    loadComponent: () => import('./menus/menus.page').then( m => m.MenusPage)
  },
];
