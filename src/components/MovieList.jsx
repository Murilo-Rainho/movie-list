import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies, onClick } = this.props;

    return (
      <div className="movie-list">
        { movies.map((movie) => (
          <MovieCard
            onClick={ onClick }
            movie={ movie }
            key={ movie.title }
          />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
