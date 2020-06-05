import React from 'react';
import Images from '../Layout/Images';
import { useParams } from 'react-router-dom';
import imageService from '../../Service/ImageService';

function PhotoCollectionGallery() {
  const { slug } = useParams();

  // use state
  const images = imageService
    .getPhotoCollectionImages(slug)
    .map((it) => it.src);
  return <Images srcSet={images} />;
}

export default PhotoCollectionGallery;
