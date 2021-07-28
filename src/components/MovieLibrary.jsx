import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick = (state) => {
    const { movies } = this.state;
    // const { movies: allMovies } = this.props;
    // allMovies.push(state);
    movies.push(state);
    this.setState({
      movies,
    });
  }

  favoriteChange = ({ target }) => {
    const { movies } = this.state;
    const film = movies.find((movie) => movie.title === target.name);
    movies.forEach(element => {
      if (film === element) {
        if (element.bookmarked === true) {
          element.bookmarked = false;
        } else {
          element.bookmarked = true
        }
      }
    });
    (film.bookmarked) ? target.style.backgroundColor = "red" : target.style.backgroundColor = "gray";
  }

  filterChange = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let allMovies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      allMovies = allMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      allMovies = allMovies.filter((movie) => movie.genre === selectedGenre);
    }
    // Dica de Fernando Costa Turma 13 a:
    // Utilizar um filter em cima do outro para juntar os filtros
    return allMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList
          movies={this.filterChange()}
          onClick={this.favoriteChange}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
