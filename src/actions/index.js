import "@babel/polyfill";
import axios from "axios";

export const FETCH_MOVIES = "fetch_movies";
export const fetchMovies = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/4/list/10?api_key=f1f61b9f4da692b8c8eb0e39806ec0f8&sort_by=vote_average.desc"
  );

  dispatch({
    type: FETCH_MOVIES,
    payload: res,
  });
};

export const FETCH_TVSHOWS = "fetch_tvshows";
export const fetchTvshows = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/4/list/7064431?api_key=f1f61b9f4da692b8c8eb0e39806ec0f8&sort_by=vote_average.desc"
  );

  dispatch({
    type: FETCH_TVSHOWS,
    payload: res,
  });
};
