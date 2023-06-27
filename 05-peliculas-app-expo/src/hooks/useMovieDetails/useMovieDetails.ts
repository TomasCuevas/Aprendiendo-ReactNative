import { useEffect, useState } from "react";

//* AXIOS INSTANCE *//
import { movie_api } from "../../axios";

//* INTERFACES *//
import { ICast, ICreditResponse, IMovieFull } from "../../interfaces";

interface IMovieDetails {
  cast?: ICast[];
  fullMovie?: IMovieFull;
  isLoading: boolean;
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
    cast: [],
    fullMovie: undefined,
    isLoading: true,
  });

  const getMovieDetails = async () => {
    const [movieDetailsResponse, castResponse] = await Promise.all([
      movie_api.get<IMovieFull>(`/${movieId}`),
      movie_api.get<ICreditResponse>(`/${movieId}/credits`),
    ]);

    setMovieDetails({
      cast: castResponse.data.cast,
      fullMovie: movieDetailsResponse.data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return {
    ...movieDetails,
  };
};
