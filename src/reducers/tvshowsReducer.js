import { FETCH_TVSHOWS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TVSHOWS:
      return action.payload.data;
    default:
      return state;
  }
};
