import {
  FETCH_MOVIE_DETAILS
} from "../actions/types";

const initialState = {

};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};