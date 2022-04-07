import { takeLatest, call } from "redux-saga/effects";
import MovieActions, { MovieTypes } from "../redux/MovieRedux";
import { callApi, callApiMovieDetail } from "../services/Utils";
import API from "../../sauce/services/Api";

const movieAPI = API.create();

interface ActionType {
  id: number;
  type: string;
}

function* getPopularMovies(api: any) {
  yield call(
    callApi,
    api.getPopularStreaming,
    MovieActions.moviePopular,
    MovieActions.movieFailure
  );
}

function* getPopularTV(api: any) {
  yield call(
    callApi,
    api.getPopularTV,
    MovieActions.tvPopular,
    MovieActions.movieFailure
  );
}

function* getTheatreMovies(api: any) {
  yield call(
    callApi,
    api.getPopularInTheatres,
    MovieActions.theatrePopular,
    MovieActions.movieFailure
  );
}

function* getRentMovies(api: any) {
  yield call(
    callApi,
    api.getPopularForRent,
    MovieActions.rentPopular,
    MovieActions.movieFailure
  );
}

function* getTrendingToday(api: any) {
  yield call(
    callApi,
    api.getTrendingToday,
    MovieActions.movieTrendingToday,
    MovieActions.movieFailure
  );
}

function* getTrendingWeekly(api: any) {
  yield call(
    callApi,
    api.getTrendingWeekly,
    MovieActions.movieTrendingWeek,
    MovieActions.movieFailure
  );
}

function* getFreeMovies(api: any) {
  yield call(
    callApi,
    api.getFreeMovies,
    MovieActions.movieFree,
    MovieActions.movieFailure
  );
}

function* getFreeTV(api: any) {
  yield call(
    callApi,
    api.getFreeTV,
    MovieActions.tvFree,
    MovieActions.movieFailure
  );
}

function* getSingleMovie(api: any, action: ActionType) {
  yield call(
    callApiMovieDetail,
    api.getMovie,
    action.id,
    MovieActions.movieDetail,
    MovieActions.movieDetailScreenFailure
  );
}

function* getLatestMovie(api: any) {
  yield call(
    callApi,
    api.getLatestTrailerStreaming,
    MovieActions.latestTrailerStreaming,
    MovieActions.movieFailure
  );
}
function* getLatestTVShow(api: any) {
  yield call(
    callApi,
    api.getLatestTrailerTV,
    MovieActions.latestTrailerTV,
    MovieActions.movieFailure
  );
}
function* getLatestForRent(api: any) {
  yield call(
    callApi,
    api.getLatestTrailerForRent,
    MovieActions.latestTrailerRent,
    MovieActions.movieFailure
  );
}
function* getLatestInTheatres(api: any) {
  yield call(
    callApi,
    api.getLatestTrailerInTheatres,
    MovieActions.latestTrailerTheatres,
    MovieActions.movieFailure
  );
}
function* getSingleTV(api: any, action: ActionType) {
  yield call(
    callApiMovieDetail,
    api.getTV,
    action.id,
    MovieActions.movieDetail,
    MovieActions.movieDetailScreenFailure
  );
}

export default [
  takeLatest(MovieTypes.MOVIE_REQUEST, getLatestMovie, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getLatestTVShow, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getLatestForRent, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getLatestInTheatres, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getPopularMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getPopularTV, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTheatreMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getRentMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTrendingToday, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTrendingWeekly, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getFreeMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getFreeTV, movieAPI),
  takeLatest(MovieTypes.MOVIE_SINGLE_REQUEST, getSingleMovie, movieAPI),
  takeLatest(MovieTypes.TV_SINGLE_REQUEST, getSingleTV, movieAPI),
];
