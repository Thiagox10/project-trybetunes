import React from 'react';
import CardAlbum from '../components/CardAlbum';
import Carregando from '../components/Carregando';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import NotFound from './NotFound';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      inputsearch: '',
      artist: '',
      disabled: true,
      loading: false,
      albumList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
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

  async fetchSearch() {
    const { inputsearch } = this.state;
    this.setState({ loading: true });
    const responseObj = await searchAlbumsAPI(inputsearch);
    this.setState({ loading: false });
    console.log(responseObj);
    this.setState({
      albumList: responseObj,
      artist: `Resultado de álbuns de: ${inputsearch}`,
      inputsearch: '' });
  }

  render() {
    const { disabled, inputsearch, loading, artist, albumList } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        { loading ? <Carregando /> : (
          <>
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
                onClick={ this.fetchSearch }
              >
                Pesquisar
              </button>
            </form>
            <h2>
              { artist }
            </h2>
            {albumList.length === 0
              ? <NotFound />
              : albumList.map((element) => (
                <CardAlbum
                  key={ element.collectionId }
                  collectionId={ element.collectionId }
                  artistName={ element.artistName }
                  imgAlbum={ element.artworkUrl100 }
                  collectionName={ element.collectionName }
                />))}
          </>
        ) }
      </div>
    );
  }
}

export default Search;
