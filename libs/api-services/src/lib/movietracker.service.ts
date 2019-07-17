import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Movie } from '@mt/interfaces';

interface SearchMoviesResults {
  movies: Movie[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieTrackerService {
  movieTrackerUrl = 'api/movietracker'; // URL to web api

  constructor(private readonly http: HttpClient) {}

  public searchMovies(term: string = ''): Observable<Movie[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('term', term) } : {};
    return this.http
      .get<SearchMoviesResults>(this.movieTrackerUrl, options)
      .pipe(
        map((results: SearchMoviesResults) => results.movies),
        catchError(this.handleError)
      );
  }

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http
      .post<Movie>(this.movieTrackerUrl, movie, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteMovie(id: string): Observable<{}> {
    const url = `${this.movieTrackerUrl}/${id}`; // DELETE api/movietracker/42-5c-...
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateMovie(movie: Movie): Observable<Movie> {
    const url = `${this.movieTrackerUrl}/${movie.id}`;
    return this.http
      .put<Movie>(url, movie, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful respone code.
      // The response body may contain clues as to what was wrong
      console.log(
        `Backend returned code ${error.status}, body was: ${error.status}`
      );
    }

    // return an observable wuth a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
