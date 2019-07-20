import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovietrackerCoreModule } from '@mt/movietracker/core';

import { Routes, RouterModule } from '@angular/router';
import { MovieTrackerMoviesListComponent } from './containers/movietracker-movies-list/movietracker-movies-list.component';
import { MovieTrackerGridComponent } from './components/movietracker-grid/movietracker-grid.component';
import { MovietrackerSearchBarComponent } from './components/movietracker-search-bar/movietracker-search-bar.component';
import { MovieDialogBoxComponent } from './components/movie-dialog-box/movie-dialog-box.component';

const routes: Routes = [
  {
    path: '',
    component: MovieTrackerMoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MovietrackerCoreModule],
  declarations: [
    MovieTrackerMoviesListComponent,
    MovieTrackerGridComponent,
    MovietrackerSearchBarComponent,
    MovieDialogBoxComponent
  ],
  exports: [MovieTrackerMoviesListComponent],
  entryComponents: [MovieDialogBoxComponent]
})
export class MovietrackerMoviesModule {}
