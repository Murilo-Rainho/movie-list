import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form className="add-movie-container container-top" data-testid="search-bar-form">
          <label className="add-movie-label" htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input
              className="add-movie-input"
              data-testid="text-input"
              type="text"
              name="searchText"
              id="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label className="add-movie-label label-checkbox" htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              className="checkbox-input"
              data-testid="checkbox-input"
              type="checkbox"
              name="bookmarkedOnly"
              id="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label className="add-movie-label label-select-top" htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              className="add-movie-select"
              data-testid="select-input"
              name="selectedGenre"
              id="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="animation">Animação</option>
              <option data-testid="select-option" value="fiction">Ficção</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
