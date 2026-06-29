export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path?: string | null;
  release_date: string;
  vote_average: number;
  genres?: Genre[];
  runtime?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface MovieCredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
