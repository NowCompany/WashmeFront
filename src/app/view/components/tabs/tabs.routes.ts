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
          import('../../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'wash',
        loadComponent: () =>
          import('../../pages/wash/wash.page').then((m) => m.WashPage),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../../pages/notifications/notifications.page').then(
            (m) => m.NotificationsPage
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('../../pages/perfil/perfil.page').then((m) => m.PerfilPage),
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
