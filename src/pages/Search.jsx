import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      inputsearch: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const TWO = 2;
    const habilitado = target.value.length < TWO;

    this.setState({
      [name]: value,
      disabled: habilitado,
    });
  }

  render() {
    const { disabled, inputsearch } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <form>
          <input
            data-testid="search-artist-input"
            name="inputsearch"
            type="text"
            value={ inputsearch }
            placeholder="Nome do Artista"
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            disabled={ disabled }
            type="button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
