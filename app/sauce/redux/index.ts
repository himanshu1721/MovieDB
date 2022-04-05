import { combineReducers } from "redux";
import { MovieReducer } from "./MovieRedux";

const rootReducer = combineReducers({
  movielist: MovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
