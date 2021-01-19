import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions';

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const movie_id = this.props.match.params.id;
    console.log(movie_id);
    this.props.fetchMovieDetails(movie_id);
  };

  render() {
    const details = this.props.movieDetails;

    return (
      <div>
        <div>
          <div className='movie-description container'>
            <div className='description-details'>
              <img
                className='side-image'
                src={`https://image.tmdb.org/t/p/w154/${details.poster_path}`}
                alt={details.original_title}
                style={{ width: '50%', height: '50%' }}
              />
              <div className='tag'>
                <span>{details.release_date}</span>
                <p>{details.original_title}</p>
                <p>{details.overview}</p>
                <a href={details.homepage}>
                  <button className='btn btn-block'>Go For Trailler</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.movieDetails);
  return {
    movieDetails: state.movieDetails,
  };
};
export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
