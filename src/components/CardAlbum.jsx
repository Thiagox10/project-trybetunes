import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAlbum extends React.Component {
  render() {
    const { artistName, collectionId, imgAlbum, collectionName } = this.props;
    return (
      <Link
        className="link"
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div className="album-card">
          <img className="album-card-image" src={ imgAlbum } alt={ artistName } />
          <div className="album-card-body">
            <h3 className="album-card-title">{ artistName }</h3>
            <h4 className="album-card-subtitle">{ collectionName }</h4>
          </div>
        </div>
      </Link>
    );
  }
}

CardAlbum.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  imgAlbum: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default CardAlbum;
