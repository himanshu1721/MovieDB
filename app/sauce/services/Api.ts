import apisauce from "apisauce";
import { AppConstants } from "../../constants";

const create = (
  baseURL = AppConstants.BASE_URL,
  endPoint = AppConstants.POPULAR_MOVIES_ENDPOINT
) => {
  const api = apisauce.create({
    baseURL,
  });

  const getLatestTrailerStreaming = () =>
    api.get(AppConstants.LATEST_TRAILER_STREAMING);
  const getLatestTrailerTV = () => api.get(AppConstants.LATEST_TRAILER_TV);
  const getLatestTrailerForRent = () =>
    api.get(AppConstants.LATEST_TRAILER_FOR_RENT);
  const getLatestTrailerInTheatres = () =>
    api.get(AppConstants.LATEST_TRAILER_IN_THEATRES);
  const getPopularStreaming = () => api.get(endPoint);
  const getPopularTV = () => api.get(AppConstants.POPULAR_TV_ENDPOINT);
  const getPopularInTheatres = () =>
    api.get(AppConstants.MOVIES_IN_THEATRES_ENDPOINT);
  const getPopularForRent = () =>
    api.get(AppConstants.MOVIES_FOR_RENT_ENDPOINT);
  const getTrendingToday = () =>
    api.get(AppConstants.TRENDING_MOVIES_DAY_ENDPOINT);
  const getTrendingWeekly = () =>
    api.get(AppConstants.TRENDING_MOVIES_WEEK_ENDPOINT);
  const getFreeMovies = () => api.get(AppConstants.FREE_MOVIES_ENDPOINT);
  const getFreeTV = () => api.get(AppConstants.FREE_TV_ENDPOINT);
  const getMovie = (movieId: number) =>
    api.get(
      `${AppConstants.MOVIE}${movieId}${AppConstants.MOVIE_TRAILING_ENDPOINT}`
    );
  const getTV = (tvId: number) =>
    api.get(`${AppConstants.TV}${tvId}${AppConstants.MOVIE_TRAILING_ENDPOINT}`);

  return {
    getLatestTrailerStreaming,
    getLatestTrailerTV,
    getLatestTrailerForRent,
    getLatestTrailerInTheatres,
    getPopularStreaming,
    getPopularTV,
    getPopularInTheatres,
    getPopularForRent,
    getTrendingToday,
    getTrendingWeekly,
    getFreeMovies,
    getFreeTV,
    getMovie,
    getTV,
  };
};

export default {
  create,
};
