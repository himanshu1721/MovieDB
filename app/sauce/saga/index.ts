import { all } from "redux-saga/effects";
import Movielist from "./Movie";

export default function* rootSaga() {
  yield all([...Movielist]);
}
