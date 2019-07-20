import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@mt/movietracker/ui';
import { AuthGuard, LoginComponent } from '@mt/movietracker/auth';

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
        canActivate: [AuthGuard],
        children: children
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
