import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Movie } from '../../../models/movie';

import { MovieCard } from './movie-card';

describe('MovieCard', () => {
  let component: MovieCard;
  let fixture: ComponentFixture<MovieCard>;
  const movie: Movie = {
    id: 1,
    title: 'Inception',
    overview: 'Un ladro specializzato nei sogni.',
    poster_path: '/poster.jpg',
    backdrop_path: '/backdrop.jpg',
    release_date: '2010-07-16',
    vote_average: 8.8,
    genres: [{ id: 878, name: 'Fantascienza' }],
    runtime: 148,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCard);
    fixture.componentRef.setInput('movie', movie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
