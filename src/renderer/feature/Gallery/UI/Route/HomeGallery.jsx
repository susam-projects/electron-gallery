import React from 'react';
import Images from '../Layout/Images';
import imageService from '../../Service/ImageService';

function HomeGallery() {
  // use state
  const images = imageService.getHomeImages().map((it) => it.src);
  return <Images srcSet={images} />;
}

export default HomeGallery;
