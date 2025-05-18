import { Routes } from '@angular/router';

export const AUTHORITY_ROUTES: Routes = [
  {
    path: 'principle',
    loadComponent: () => import('../authority/principle/principle.component')
      .then(m => m.PrincipleComponent) // Lazy-load PrincipleComponent
  },
 
];
