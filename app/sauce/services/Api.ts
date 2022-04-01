import apisauce from "apisauce";
import { AppConstants } from "../../constants";

const create = (
  baseURL = AppConstants.BASE_URL,
  endPoint = AppConstants.POPULAR_MOVIES_ENDPOINT
) => {
  const api = apisauce.create({
    baseURL,
  });

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

  return {
    getPopularStreaming,
    getPopularTV,
    getPopularInTheatres,
    getPopularForRent,
    getTrendingToday,
    getTrendingWeekly,
    getFreeMovies,
    getFreeTV,
  };
};

export default {
  create,
};
