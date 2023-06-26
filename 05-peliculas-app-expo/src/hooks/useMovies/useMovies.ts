import { useState, useEffect } from "react";

//* AXIOS INSTANCE *//
import { movie_api } from "../../axios";

//* INTERFACES *//
import { IMovie, IMovieResponse } from "../../interfaces";

interface IMoviesState {
  moviesOnCinema: IMovie[];
  popularMovies: IMovie[];
  topRated: IMovie[];
  upcoming: IMovie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<IMoviesState>({
    moviesOnCinema: [],
    popularMovies: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const response = await Promise.all([
      movie_api.get<IMovieResponse>("/now_playing"),
      movie_api.get<IMovieResponse>("/popular"),
      movie_api.get<IMovieResponse>("/top_rated"),
      movie_api.get<IMovieResponse>("/upcoming"),
    ]);

    setMoviesState({
      moviesOnCinema: response[0].data.results,
      popularMovies: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
