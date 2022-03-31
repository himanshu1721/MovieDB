import { takeLatest, call } from "redux-saga/effects";
import MovieActions, { MovieTypes } from "../redux/MovieRedux";
import { callApi } from "../services/Utils";
import API from "../../sauce/services/Api";

const movieAPI = API.create();

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

export default [
  takeLatest(MovieTypes.MOVIE_REQUEST, getPopularMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getPopularTV, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTheatreMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getRentMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTrendingToday, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTrendingWeekly, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getFreeMovies, movieAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getFreeTV, movieAPI),
];
