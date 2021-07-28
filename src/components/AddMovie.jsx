import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checked') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieFunc = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  validationChange = ({ target }) => {
    const { rating } = this.state;
    if (rating !== '') target.prop('disable', false);
  }

  renderTitleInput = () => {
    const { title } = this.state;
    return (
      <div className="sub-section-add-movie" >
        <label className="add-movie-label" data-testid="title-input-label" htmlFor="title">
          Título
          <input
            className="add-movie-input"
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput = () => {
    const { subtitle } = this.state;
    return (
      <div className="sub-section-add-movie" >
        <label className="add-movie-label" data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            className="add-movie-input"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="subtitle"
            value={subtitle}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderImageInput = () => {
    const { imagePath } = this.state;
    return (
      <div className="sub-section-add-movie" >
        <label className="add-movie-label" data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            className="add-movie-input"
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="imagePath"
            value={imagePath}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderStorylineInput = () => {
    const { storyline } = this.state;
    return (
      <div className="sub-section-add-movie-TeAr" >
        <label className="add-movie-label" data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            className="add-movie-textarea"
            data-testid="storyline-input"
            name="storyline"
            id="storyline"
            cols="30"
            rows="10"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderRatingInput = () => {
    const { rating } = this.state;
    return (
      <div className="sub-section-add-movie" >
        <label className="add-movie-label" data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            className="add-movie-input"
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={rating}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderGenreSelect = () => {
    const { genre } = this.state;
    return (
      <div className="sub-section-add-movie" >
        <label className="add-movie-label" data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            className="add-movie-select"
            data-testid="genre-input"
            name="genre"
            id="genre"
            value={genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="animation">Animação</option>
            <option data-testid="genre-option" value="fiction">Ficção</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="add-movie-container" data-testid="add-movie-form">
          <div className="add-movie-inputs-container">
            {this.renderTitleInput()}
            {this.renderSubtitleInput()}
            {this.renderImageInput()}
            {this.renderRatingInput()}
          </div>
          {this.renderStorylineInput()}
          <div className="add-movie-buttonAndSelect-container">
            <button
              className="add-movie-button"
              type="submit"
              data-testid="send-button"
              onClick={this.addMovieFunc}
            // disabled
            >
              Adicionar filme
            </button>
            {this.renderGenreSelect()}
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
