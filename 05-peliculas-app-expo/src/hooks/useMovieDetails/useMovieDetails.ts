import { useEffect, useState } from "react";

//* AXIOS INSTANCE *//
import { movie_api } from "../../axios";

//* INTERFACES *//
import { IMovieFull } from "../../interfaces";

interface IMovieDetails {
  isLoading: boolean;
  fullMovie: IMovieFull;
  cast: [];
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();

  const getMovieDetails = async () => {
    const response = await movie_api.get<IMovieFull>(`/${movieId}`);
    console.log(response.data.title);
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return {
    ...movieDetails,
  };
};
