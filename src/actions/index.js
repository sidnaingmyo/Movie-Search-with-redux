import movieApi from '../apis/movieapi';
import { FETCH_MOVIE_DETAILS, FETCH_MOVIE_SEARCH } from './types';

export const fetchMovieDetails = (movie_id) => async (dispatch) => {
  const response = await movieApi.get(
    `/movie/${movie_id}?api_key=8a0c10832617c5ce67b6a35a5f53ef43`
  );
  dispatch({
    type: FETCH_MOVIE_DETAILS,
    payload: response.data,
  });
};

export const fetchMovieSearch = (movie_title) => async (dispatch) => {
  const response = await movieApi.get(
    `/search/movie?api_key=8a0c10832617c5ce67b6a35a5f53ef43&query=${movie_title}`
  );
  dispatch({
    type: FETCH_MOVIE_SEARCH,
    payload: response.data.results,
  });
};
