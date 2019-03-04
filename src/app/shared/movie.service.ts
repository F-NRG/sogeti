import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, forkJoin } from 'rxjs';



@Injectable()
export class MovieService {
  apiKey = '&apikey=6c3a2d45&';
  baseUrl = 'http://www.omdbapi.com/?type=movie&t=';

  constructor(private http: HttpClient) { }

  getMovie(movieTitle: string, plot: string) {
    return this.http.get(this.baseUrl + movieTitle + this.apiKey + plot)
        .pipe(catchError(error => {
          return throwError('I cannot give you movie, instead I give you error!');
    }));
  }
  getFeatured(movieTitle1: string, movieTitle2: string, plot: string) {
    const request1 = this.http.get(this.baseUrl + movieTitle1 + this.apiKey + plot);
    const request2 = this.http.get(this.baseUrl + movieTitle2 + this.apiKey + plot);
    return forkJoin([request1, request2]).pipe(catchError(error => {
      return throwError('I cannot give you movies, instead I give you error!');
    }));
  }
}
