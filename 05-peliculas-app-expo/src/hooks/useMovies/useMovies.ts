import { useState, useEffect } from "react";

//* AXIOS INSTANCE *//
import { movie_api } from "../../axios";

//* INTERFACES *//
import { IMovie, IMovieResponse } from "../../interfaces";

export const useMovies = () => {
  const [moviesOnCinema, setMoviesOnCinema] = useState<IMovie[]>([]);
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const respNowPlaying = await movie_api.get<IMovieResponse>("/now_playing");
    const respPopular = await movie_api.get<IMovieResponse>("/popular");

    const nowPlaying = respNowPlaying.data.results;
    const popular = respPopular.data.results;

    setMoviesOnCinema(nowPlaying);
    setPopularMovies(popular);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesOnCinema,
    popularMovies,
    isLoading,
  };
};
