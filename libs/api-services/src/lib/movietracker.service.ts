import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';

export interface SearchMoviesResults {
  movies: Movie[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieTrackerService {
  constructor(private readonly http: HttpClient) {}

  public searchMovies(term: string = ''): Observable<Movie[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('term', term) } : {};
    return this.http
      .get<SearchMoviesResults>('api/movietracker/', options)
      .pipe(
        map((results: SearchMoviesResults) => results.movies),
        catchError(this.handleError)
      );
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

export interface Movie {
  id?: number;
  title: string;
  watchedOn: Date;
  genre?: string;
  rating?: number;
}

// post(movie: Movie): Observable<Movie> {
//   let url_ = this.baseUrl + '/api/MovieTracker';
//   url_ = url_.replace(/[?&]$/, '');

//   const content_ = JSON.stringify(movie);

//   const options_: any = {
//     body: content_,
//     observe: 'response',
//     responseType: 'blob',
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     })
//   };

//   return this.http
//     .request('post', url_, options_)
//     .pipe(
//       _observableMergeMap((response_: any) => {
//         return this.processPost(response_);
//       })
//     )
//     .pipe(
//       _observableCatch((response_: any) => {
//         if (response_ instanceof HttpResponseBase) {
//           try {
//             return this.processPost(<any>response_);
//           } catch (e) {
//             return <Observable<Movie>>(<any>_observableThrow(e));
//           }
//         } else return <Observable<Movie>>(<any>_observableThrow(response_));
//       })
//     );
// }

// protected processPost(response: HttpResponseBase): Observable<Movie> {
//   const status = response.status;
//   const responseBlob =
//     response instanceof HttpResponse
//       ? response.body
//       : (<any>response).error instanceof Blob
//       ? (<any>response).error
//       : undefined;

//   const _headers: any = {};
//   if (response.headers) {
//     for (const key of response.headers.keys()) {
//       _headers[key] = response.headers.get(key);
//     }
//   }
//   if (status === 201) {
//     return blobToText(responseBlob).pipe(
//       _observableMergeMap(_responseText => {
//         let result201: any = null;
//         const resultData201 =
//           _responseText === ''
//             ? null
//             : JSON.parse(_responseText, this.jsonParseReviver);
//         result201 = Movie.fromJS(resultData201);
//         return _observableOf(result201);
//       })
//     );
//   } else if (status === 400) {
//     return blobToText(responseBlob).pipe(
//       _observableMergeMap(_responseText => {
//         let result400: any = null;
//         const resultData400 =
//           _responseText === ''
//             ? null
//             : JSON.parse(_responseText, this.jsonParseReviver);
//         result400 = ProblemDetails.fromJS(resultData400);
//         return throwException(
//           'A server error occurred.',
//           status,
//           _responseText,
//           _headers,
//           result400
//         );
//       })
//     );
//   } else {
//     return blobToText(responseBlob).pipe(
//       _observableMergeMap(_responseText => {
//         let resultdefault: any = null;
//         const resultDatadefault =
//           _responseText === ''
//             ? null
//             : JSON.parse(_responseText, this.jsonParseReviver);
//         resultdefault = ProblemDetails.fromJS(resultDatadefault);
//         return throwException(
//           'A server error occurred.',
//           status,
//           _responseText,
//           _headers,
//           resultdefault
//         );
//       })
//     );
//   }
// }
