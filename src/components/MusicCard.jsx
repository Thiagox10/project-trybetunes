import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      favoritList: [],

    };

    this.favoriteMusic = this.favoriteMusic.bind(this);
    // this.getFavorite = this.getFavorite.bind(this);
  }

  // componentDidMount() {
  //   this.getFavorite();
  //   console.log("didmount");
  // }

  // componentDidUpdate() {
  //   this.getFavorite();
  //   console.log("update");
  // }

  //   listFavorite.foreach((element) =>  {
  // if (element.trackId === trackId ) {
  // this.setState({ checked: true });
  // }

  async favoriteMusic() {
    const { music, loading } = this.props;
    loading(true);
    await addSong(music);
    loading(false);
  }

  render() {
    const { trackName, previewUrl, trackId, index, checked } = this.props;
    const { favoritList } = this.state;

    return (
      <div>
        {console.log(index)}
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            id={ trackId }
            name={ trackId }
            type="checkbox"
            checked={ checked }
            onChange={ this.favoriteMusic }
          />
        </label>
      </div>

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;

// Songs [1]
// artistId: 5040714
// artistName: "AC/DC"
// artistViewUrl: "https://music.apple.com/us/artist/ac-dc/5040714?uo=4"
// artworkUrl30: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/74/65/fa74657f-392a-cb55-f83e-05dd99d9baf9/source/30x30bb.jpg"
// artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/74/65/fa74657f-392a-cb55-f83e-05dd99d9baf9/source/60x60bb.jpg"
// artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/fa/74/65/fa74657f-392a-cb55-f83e-05dd99d9baf9/source/100x100bb.jpg"
// collectionCensoredName: "Back In Black"
// collectionExplicitness: "notExplicit"
// collectionId: 574050396
// collectionName: "Back In Black"
// collectionPrice: 9.99
// collectionViewUrl: "https://music.apple.com/us/album/hells-bells/574050396?i=574050495&uo=4"
// country: "USA"
// currency: "USD"
// discCount: 1
// discNumber: 1
// isStreamable: true
// kind: "song"
// previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3b/1d/6f/3b1d6fc6-fe3e-b0a0-ff8c-0e0d357097c5/mzaf_18386295871643717119.plus.aac.p.m4a"
// primaryGenreName: "Hard Rock"
// releaseDate: "1980-07-25T07:00:00Z"
// trackCensoredName: "Hells Bells"
// trackCount: 10
// trackExplicitness: "notExplicit"
// trackId: 574050495
// trackName: "Hells Bells"
// trackNumber: 1
// trackPrice: 1.29
// trackTimeMillis: 312815
// trackViewUrl: "https://music.apple.com/us/album/hells-bells/574050396?i=574050495&uo=4"
// wrapperType: "track
