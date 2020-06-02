import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FavoritesLink, HomeLink, ImagesLink } from './GalleryMenuItems';
import imageService from '../../Service/ImageService';

function GalleryMenu({ routePrefix: base }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  const collections = imageService.getPhotoCollections();

  return (
    <>
      <HomeLink link={`${base}`} currentUrl={currentUrl} />
      <FavoritesLink link={`${base}/favorites`} currentUrl={currentUrl} />
      <For each="collection" of={collections}>
        <ImagesLink
          key={collection.slug}
          title={collection.title}
          link={`${base}/photo-collections/${collection.slug}`}
          currentUrl={currentUrl}
        />
      </For>
    </>
  );
}

GalleryMenu.propTypes = {
  routePrefix: PropTypes.string,
};

export default GalleryMenu;
