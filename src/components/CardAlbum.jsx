import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAlbum extends React.Component {
  render() {
    const { artistName, collectionId, imgAlbum, collectionName } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div>
          <img src={ imgAlbum } alt={ artistName } />
          <h3>{ artistName }</h3>
          <h4>{ collectionName }</h4>
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
