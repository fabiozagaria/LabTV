import { Component, input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {

  protected readonly baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  movie = input.required<Movie>();
  
}
