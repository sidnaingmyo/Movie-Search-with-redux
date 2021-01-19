import {
  combineReducers
} from "redux";

import movieDetails from './movieDetails';

import movieSearch from './movieSearch';


export default combineReducers({

  movieDetails: movieDetails,

  movieSearch: movieSearch,
});