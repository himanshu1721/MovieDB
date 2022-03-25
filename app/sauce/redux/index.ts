import { combineReducers } from "redux";
import { MovieReducer } from "./MovieRedux";

export default combineReducers({
  movielist: MovieReducer,
});
