import { Component, signal, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';

import { MovieService } from '../../services/movie-service';

import { MovieCard } from '../movie-card/movie-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ricerca',
  imports: [MovieCard, FormsModule],
  templateUrl: './ricerca.html',
  styleUrl: './ricerca.css',
})
export class Ricerca implements OnInit {
  protected movies = signal<Movie[]>([]);
  protected filteredMovies = signal<Movie[]>([]);
  protected inputFilmSearch = signal<string>('');
  protected isLoading = signal(true);
  protected errorMessage = signal('');

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies.set(data);
        this.filteredMovies.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Non riesco a caricare i film.');
        this.isLoading.set(false);
      }
    });
  }

  updateInput(value: string): void {
    this.inputFilmSearch.set(value);
    this.searchFilms();
  }

  searchFilms(): void {
    const term = this.inputFilmSearch().trim().toLowerCase();

    this.filteredMovies.set(
      this.movies().filter(movie => movie.title.toLowerCase().includes(term))
    );
  }
}
