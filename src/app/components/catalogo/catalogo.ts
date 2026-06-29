import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../../models/movie'; 
import { OnInit } from '@angular/core';
import { MovieCard } from "../movie-card/movie-card";

@Component({
  selector: 'app-catalogo',
  imports: [MovieCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  protected movies = signal<Movie[]>([]);
  protected isLoading = signal(true);
  protected errorMessage = signal('');

  constructor(private movieService: MovieService) {};

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: data => {
        this.movies.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Non riesco a caricare i film.');
        this.isLoading.set(false);
      }
    })
  }
}
