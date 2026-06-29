import { Injectable } from '@angular/core';
import { Movie, MoviesJson } from '../../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private dbUrl = '/db.json';

  constructor(private http: HttpClient){};

  getMovies(): Observable<Movie[]> {
    return this.getMoviesFromDb();
  }

  getMovieByID(id: number): Observable<Movie> {
    return this.getMoviesFromDb().pipe(
      map(movies => {
        const movie = movies.find(item => String(item.id) === String(id));

        if (!movie) {
          throw new Error(`Film con ${id} non trovato`);
        }

        return movie;
      })
    );
  }

  private getMoviesFromDb(): Observable<Movie[]> {
    return this.http.get<MoviesJson>(this.dbUrl).pipe(
      map(data => data.movies)
    );
  }
}
