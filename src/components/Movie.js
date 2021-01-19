import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

class Movie extends React.Component {
  viewMovie() {}
  render() {
    const movieId = this.props.movie.id;
    return (
      <div className='col s12 m6 l3'>
        <div className='card'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img
              alt='poster'
              width='120'
              src={this.props.movie.poster_src}
              alt='card image'
              style={{ width: '100%', height: 360 }}
            />
          </div>
          <div className='card-content'>
            <Link to={`/movienchill/${movieId}`}>
              <button
                className='btn btn-about'
                type='button'
                onClick={this.viewMovie.bind(this)}
                value='View'
              >
                Read More
                <i className='fas fa-info-circle' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
