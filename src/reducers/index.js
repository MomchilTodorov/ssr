import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import tvshowsReducer from "./tvshowsReducer";

export default combineReducers({
  movies: moviesReducer,
  tvshows: tvshowsReducer,
});
