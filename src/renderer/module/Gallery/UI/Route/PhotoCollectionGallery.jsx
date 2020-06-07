import React, { useEffect, useState } from 'react';
import Images from '../Layout/Images';
import { useParams } from 'react-router-dom';
import imageService from '../../Service/ImageService';

function PhotoCollectionGallery() {
  const { slug } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const collectionImages = await imageService.getPhotoCollectionImages(
        slug,
      );
      setImages(collectionImages);
    }
    getImages();
  }, [slug]);

  return <Images imageSet={images} />;
}

export default PhotoCollectionGallery;
