import React from 'react';
import Images from '../Layout/Images';
import imageService from '../../Service/ImageService';

function FavoritesGallery() {
  // use state
  const images = imageService.getFavoriteImages().map((it) => it.src);
  return <Images srcSet={images} />;
}

export default FavoritesGallery;
