import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  movieTrending: ["trending"],
  moviePopular: ["popular"],
  movieFree: ["free"],
  movieRequest: [],
  movieFailure: ["error"],
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  trendingList: null,
  popularList: null,
  freeMoviesList: null,
  errorMessage: null,
  error: false,
  fetching: false,
});

/* ------------- Selectors ------------- */
export const MovieSelectors = {
  getTrending: (state: any) => state.movielist.trendingList,
  getPopular: (state: any) => state.movielist.popularList,
  getFreeMovies: (state: any) => state.movielist.freeMoviesList,
  getFetch: (state: any) => state.movielist.fetching,
  getError: (state: any) => state.movielist.error,
  getErrorMessage: (state: any) => state.movielist.errorMessage,
};

/* ------------- Reducers ------------- */

export const onMovieTrending = (state: any, action: any) => {
  return state.merge({
    trendingList: action.trending.results,
    error: false,
    fetching: false,
  });
};

export const onMoviePopular = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    popularList: action.popular.results,
  });
};

export const onFreeMovies = (state: any, action: any) => {
  return state.merge({
    error: false,
    fetching: false,
    freeMoviesList: action.free.results,
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
  [Types.MOVIE_TRENDING]: onMovieTrending,
  [Types.MOVIE_POPULAR]: onMoviePopular,
  [Types.MOVIE_FREE]: onFreeMovies,
  [Types.MOVIE_REQUEST]: onMovieRequest,
  [Types.MOVIE_FAILURE]: onMovieFailure,
});
