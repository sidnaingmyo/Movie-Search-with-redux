import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMovieSearch } from '../actions';

import Movie from './Movie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie_title: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const movie_title = event.target.value;

    this.props.fetchMovieSearch(movie_title);

    var movieRows = [];

    this.props.movieSearch.map((movie) => {
      movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      const movieRow = <Movie key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
    });
    if (movie_title !== '') {
      this.setState({ rows: movieRows });
    } else {
      this.setState({ rows: '' });
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <section className='col s4 offset-s4'>
            <div className='input-field'>
              <input
                placeholder='Search Movie'
                value={this.movie_title}
                onChange={this.handleSubmit}
              />
            </div>
          </section>
        </div>
        <div className='row'>
          <div className='col s12'>{this.state.rows}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieSearch: state.movieSearch,
  };
};

export default connect(mapStateToProps, {
  fetchMovieSearch,
})(App);
