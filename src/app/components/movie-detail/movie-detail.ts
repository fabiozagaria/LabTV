import { Component, OnInit, signal } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CastMember, CrewMember, Movie } from '../../../models/movie';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink, MovieCard],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {

  protected readonly baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  protected movie = signal<Movie | undefined>(undefined);
  protected cast = signal<CastMember[]>([]);
  protected director = signal<CrewMember | undefined>(undefined);
  protected similarMovies = signal<Movie[]>([]);
  protected isLoading = signal(true);
  protected errorMessage = signal('');

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage.set('Film non valido.');
      this.isLoading.set(false);
      return;
    }

    this.movieService.getMovieById(id).subscribe({
      next: data => {
        this.movie.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Film non trovato.');
        this.isLoading.set(false);
      }
    });

    this.movieService.getMovieCredits(id).subscribe({
      next: credits => {
        this.cast.set(credits.cast.slice(0, 5));
        this.director.set(credits.crew.find(member => member.job === 'Director'));
      }
    });

    this.movieService.getSimilarMovies(id).subscribe({
      next: movies => {
        this.similarMovies.set(movies.slice(0, 4));
      }
    });
  }
}
