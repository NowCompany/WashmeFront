import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/components/tabs/tabs.routes').then((m) => m.routes),
  },
];
