import axios from "axios";

const movie_api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "62f79d44750a14fefa79021d99fc37bf",
    language: "es-ES",
  },
});

export default movie_api;
