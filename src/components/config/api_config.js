import axios from "axios";
import { useState } from "react";

export const API_KEY = "29b9f6442026c140994b05eebc16f1a4";
// export const APP_ID =
export const BASE_URL = "https://api.themoviedb.org/3/movie/550";
export const TYPE = "public";
export const imgURL = "https://image.tmdb.org/t/p/w300";

export const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export const searchMovies = `
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

export const searchMulti = `
https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

// export const getPopular = () => {
//   const [data, setData] = useState({
//     results: [],
//     selected: {},
//   });
//   axios
//     .get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//     )
//     .then(({ data }) => {
//       let results = data.results;
//       setData(results);
//       console.log(data);
//       return data;
//     });
// };

export let theMovieData = {};
export let theImage = "";

export const getTheMovieDetails = (id) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => {
      theMovieData = data;
      theImage = `${imgURL}${data.backdrop_path}`;
    });
};
