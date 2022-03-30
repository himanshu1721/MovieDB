import { takeLatest, call } from "redux-saga/effects";
import MovieActions, { MovieTypes } from "../redux/MovieRedux";
import { callApi } from "../services/Utils";
import API from "../../sauce/services/Api";

const userAPI = API.create();

function* getFreeMovies(api: any) {
  yield call(
    callApi,
    api.getFreeMovies,
    MovieActions.movieFree,
    MovieActions.movieFailure
  );
}

function* getPopular(api: any) {
  yield call(
    callApi,
    api.getPopular,
    MovieActions.moviePopular,
    MovieActions.movieFailure
  );
}

function* getTrending(api: any) {
  yield call(
    callApi,
    api.getTrending,
    MovieActions.movieTrending,
    MovieActions.movieFailure
  );
}

export default [
  takeLatest(MovieTypes.MOVIE_REQUEST, getPopular, userAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getTrending, userAPI),
  takeLatest(MovieTypes.MOVIE_REQUEST, getFreeMovies, userAPI),
];
