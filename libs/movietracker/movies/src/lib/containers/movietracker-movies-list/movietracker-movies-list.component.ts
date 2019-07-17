import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, filter, map, mergeMap, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MtAction } from '@mt/movietracker/core';
import { MovieDialogBoxComponent } from '@mt/movietracker/ui';
import { Movie, MovieTrackerService } from '@mt/api-services';

@Component({
  selector: 'mt-movietracker-movies-list',
  templateUrl: './movietracker-movies-list.component.html',
  styleUrls: ['./movietracker-movies-list.component.scss']
})
export class MovieTrackerMoviesListComponent implements OnInit {
  public dataSource$: Observable<Movie[]>;
  private refresh$ = new BehaviorSubject<string>('');

  constructor(
    private readonly dialog: MatDialog,
    private readonly movieService: MovieTrackerService
  ) {}

  ngOnInit(): void {
    this.dataSource$ = this.refresh$.pipe(
      switchMap((term: string) => this.movieService.searchMovies(term))
    );
  }

  public doAction({ type, payload }: MtAction): void {
    switch (type) {
      case 'search':
        this.refresh$.next(payload);
        break;
      case 'update':
        this.updateMovie(payload);
        break;
      case 'delete':
        this.deleteMovie(payload);
        break;
      case 'create':
        this.createMovie();
        break;
      default:
        console.log('Unhandled event type!');
    }
  }

  private createMovie(): void {
    const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
      data: { action: 'create', movie: {} }
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'create'),
        map((result: MtAction) => result.payload),
        mergeMap((createdMovie: Movie) => this.movieService.post(createdMovie)),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }

  private deleteMovie(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
      data: { action: 'delete', movie }
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'delete'),
        mergeMap(() => this.movieService.delete(movie.id)),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }

  private updateMovie(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieDialogBoxComponent, {
      data: { action: 'edit', movie }
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'edit'),
        map((result: MtAction) => result.payload),
        mergeMap((updatedMovie: Movie) =>
          this.movieService.put(updatedMovie.id, updatedMovie)
        ),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }
}
