import { Component, OnInit, signal } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {

  movie = signal<Movie | undefined>(undefined);

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieByID(id).subscribe(data => {
      this.movie.set(data);
    })
  }


}
