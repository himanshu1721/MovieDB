import { createReducer, createActions } from "reduxsauce";
import { RootStateOrAny } from "react-redux";
import Immutable, { ImmutableObject } from "seamless-immutable";

interface MovieProps {
  popularMovieList: any;
  popularTVList: any;
  popularTheatreList: any;
  popularRentList: any;
  trendingDayList: any;
  trendingWeekList: any;
  freeMoviesList: any;
  freeTVList: any;
  fetching: boolean;
  error: boolean;
  errorMessage: string;
  movie: any;
  errorMessageDetailScreen: string;
  errorDetailScreen: boolean;
  fetchingDetailScreen: boolean;
}

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
  movieDetail: ["id"],
  movieSingleRequest: ["id"],
  movieRequest: [],
  movieFailure: ["error"],
  movieDetailScreenFailure: ["error"],
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE: ImmutableObject<MovieProps> = Immutable({
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
  errorMessage: "",
  movie: null,
  errorMessageDetailScreen: "",
  errorDetailScreen: false,
  fetchingDetailScreen: false,
});

/* ------------- Selectors ------------- */
export const MovieSelectors = {
  getPopularMovie: (state: RootStateOrAny) => state.movielist.popularMovieList,
  getPopularTV: (state: RootStateOrAny) => state.movielist.popularTVList,
  getPopularMovieTheatre: (state: RootStateOrAny) =>
    state.movielist.popularTheatreList,
  getPopularMovieRent: (state: RootStateOrAny) =>
    state.movielist.popularRentList,
  getTrendingDay: (state: RootStateOrAny) => state.movielist.trendingDayList,
  getTrendingWeek: (state: RootStateOrAny) => state.movielist.trendingWeekList,
  getFreeMovies: (state: RootStateOrAny) => state.movielist.freeMoviesList,
  getFreeTV: (state: RootStateOrAny) => state.movielist.freeTVList,
  getFetch: (state: RootStateOrAny) => state.movielist.fetching,
  getError: (state: RootStateOrAny) => state.movielist.error,
  getErrorMessage: (state: RootStateOrAny) => state.movielist.errorMessage,
  getMovie: (state: RootStateOrAny) => state.movielist.movie,
  getFetchDetailScreen: (state: RootStateOrAny) =>
    state.movielist.fetchingDetailScreen,
  getErrorDetailScreen: (state: RootStateOrAny) =>
    state.movielist.errorDetailScreen,
  getErrorMessageDetailScreen: (state: RootStateOrAny) =>
    state.movielist.errorMessageDetailScreen,
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

export const onMovieDetailRequest = (state: any) => {
  return state.merge({
    fetchingDetailScreen: true,
  });
};

export const onMovieDetail = (state: any, action: any) => {
  return state.merge({
    errorDetailScreen: false,
    fetchingDetailScreen: false,
    movie: action.id,
  });
};

export const onMovieDetailFailure = (state: any) => {
  return state.merge({
    errorDetailScreen: true,
    fetchingDetailScreen: false,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const MovieReducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_DETAIL]: onMovieDetail,
  [Types.MOVIE_SINGLE_REQUEST]: onMovieDetailRequest,
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
  [Types.MOVIE_DETAIL_SCREEN_FAILURE]: onMovieDetailFailure,
});
