import React from 'react';
import PropTypes from 'prop-types';
import Carregando from '../components/Carregando';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      listMusic: [],
    };

    this.fetchMusics = this.fetchMusics.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
  }

  async fetchMusics() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({ loading: false, listMusic: musics });
  }

  render() {
    const { listMusic, loading } = this.state;
    if (loading) {
      return (
        <Carregando />
      );
    }
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img src={ listMusic[0].artworkUrl100 } alt={ listMusic[0].artistName } />
          <h2 data-testid="artist-name">{listMusic[0].artistName}</h2>
          <h3 data-testid="album-name">{listMusic[0].collectionName}</h3>
          {listMusic.slice([1]).map((element) => (<MusicCard
            key={ element.trackName }
            trackName={ element.trackName }
            previewUrl={ element.previewUrl }
          />))}
        </div>
      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string }) },
  ).isRequired,
};

export default Album;

// Album [0]
// amgArtistId: 3496
// artistId: 5040714
// artistName: "AC/DC"
// artistViewUrl: "https://music.apple.com/us/artist/ac-dc/5040714?uo=4"
// artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/74/65/fa74657f-392a-cb55-f83e-05dd99d9baf9/source/60x60bb.jpg"
// artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/74/65/fa74657f-392a-cb55-f83e-05dd99d9baf9/source/100x100bb.jpg"
// collectionCensoredName: "Back In Black"
// collectionExplicitness: "notExplicit"
// collectionId: 574050396
// collectionName: "Back In Black"
// collectionPrice: 9.99
// collectionType: "Album"
// collectionViewUrl: "https://music.apple.com/us/album/back-in-black/574050396?uo=4"
// copyright: "℗ 1980 Leidseplein Presse B.V."
// country: "USA"
// currency: "USD"
// primaryGenreName: "Hard Rock"
// releaseDate: "2012-11-19T08:00:00Z"
// trackCount: 11
