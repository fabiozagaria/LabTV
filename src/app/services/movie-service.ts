import { Injectable } from '@angular/core';
import { Movie, MovieCredits, MoviesResponse } from '../../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'e3a3c37950ec9ff64491d6a72cea52cd';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<MoviesResponse>(
        `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`
      )
      .pipe(map(response => response.results));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }

  getMovieCredits(id: number): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}&language=en-US`
    );
  }

  getSimilarMovies(id: number): Observable<Movie[]> {
    return this.http
      .get<MoviesResponse>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(map(response => response.results));
  }
}
