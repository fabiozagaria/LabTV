export interface Movie {
  id: number | string;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  releaseDate: string;
  voteAverage: number;
  genre: string;
  duration: number;
  language: string;
}

export interface MoviesJson {
  movies: Movie[];
}
