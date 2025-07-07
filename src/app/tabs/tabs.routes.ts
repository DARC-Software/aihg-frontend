import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('../events/events.page').then((m) => m.EventsPage),
      },
      {
        path: 'specials',
        loadComponent: () =>
          import('../specials/specials.page').then((m) => m.SpecialsPage),
      },
      {
        path: 'menus',
        loadComponent: () =>
          import('../menus/menus.page').then((m) => m.MenusPage),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import('../locations/locations.page').then((m) => m.LocationsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
