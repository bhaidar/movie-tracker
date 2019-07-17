import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@mt/movietracker/ui';

const defaultRoute = '/admin/movie-tracker';

export const children: Routes = [
  {
    path: 'movie-tracker',
    loadChildren: '@mt/movietracker/movies#MovietrackerMoviesModule'
  }
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultRoute
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AppLayoutComponent,
        children: children
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
