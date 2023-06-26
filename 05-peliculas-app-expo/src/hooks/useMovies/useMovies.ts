import { useState, useEffect } from "react";

//* AXIOS INSTANCE *//
import { movie_api } from "../../axios";

//* INTERFACES *//
import { IMovie, IMovieNowPlaying } from "../../interfaces";

export const useMovies = () => {
  const [moviesOnCinema, setMoviesOnCinema] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const response = await movie_api.get<IMovieNowPlaying>("/now_playing");
    const movies = response.data.results;
    setMoviesOnCinema(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesOnCinema,
    isLoading,
  };
};
