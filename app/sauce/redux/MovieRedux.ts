import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  moviePopular: ["popular"],
  tvPopular: ["popular"],
  theatrePopular: ["popular"],
  rentPopular: ["popular"],
  movieTrendingToday: ["trending"],
  movieTrendingWeek: ["trending"],
  movieFree: ["free"],
  tvFree: ["free"],
  movieRequest: [],
  movieFailure: ["error"],
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  popularMovieList: null,
  popularTVList: null,
  popularTheatreList: null,
  popularRentList: null,
  trendingDayList: null,
  trendingWeekList: null,
  freeMoviesList: null,
  freeTVList: null,
  fetching: false,
  error: false,
  errorMessage: null,
});

/* ------------- Selectors ------------- */
export const MovieSelectors = {
  getPopularMovie: (state: any) => state.movielist.popularMovieList,
  getPopularTV: (state: any) => state.movielist.popularTVList,
  getPopularMovieTheatre: (state: any) => state.movielist.popularTheatreList,
  getPopularMovieRent: (state: any) => state.movielist.popularRentList,
  getTrendingDay: (state: any) => state.movielist.trendingDayList,
  getTrendingWeek: (state: any) => state.movielist.trendingWeekList,
  getFreeMovies: (state: any) => state.movielist.freeMoviesList,
  getFreeTV: (state: any) => state.movielist.freeTVList,
  getFetch: (state: any) => state.movielist.fetching,
  getError: (state: any) => state.movielist.error,
  getErrorMessage: (state: any) => state.movielist.errorMessage,
};

/* ------------- Reducers ------------- */

export const onMoviePopular = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    popularMovieList: action.popular.results,
  });
};

export const onTVPopular = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    popularTVList: action.popular.results,
  });
};

export const onTheatrePopular = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    popularTheatreList: action.popular.results,
  });
};

export const onRentPopular = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    popularRentList: action.popular.results,
  });
};

export const onMovieTrendingToday = (state: any, action: any) => {
  return state.merge({
    trendingDayList: action.trending.results,
    error: false,
    fetching: false,
  });
};

export const onMovieTrendingWeek = (state: any, action: any) => {
  return state.merge({
    trendingWeekList: action.trending.results,
    error: false,
    fetching: false,
  });
};

export const onFreeMovies = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    freeMoviesList: action.free.results,
  });
};

export const onFreeTV = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    freeTVList: action.free.results,
  });
};

export const onMovieRequest = (state: any) => {
  return state.merge({
    fetching: true,
  });
};

export const onMovieFailure = (state: any, action: any) => {
  return state.merge({
    errorMessage: action.error,
    error: true,
    fetching: false,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const MovieReducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_POPULAR]: onMoviePopular,
  [Types.TV_POPULAR]: onTVPopular,
  [Types.THEATRE_POPULAR]: onTheatrePopular,
  [Types.RENT_POPULAR]: onRentPopular,
  [Types.MOVIE_TRENDING_TODAY]: onMovieTrendingToday,
  [Types.MOVIE_TRENDING_WEEK]: onMovieTrendingWeek,
  [Types.MOVIE_FREE]: onFreeMovies,
  [Types.TV_FREE]: onFreeTV,
  [Types.MOVIE_REQUEST]: onMovieRequest,
  [Types.MOVIE_FAILURE]: onMovieFailure,
});
