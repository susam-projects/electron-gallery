import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import HomeGallery from '../Route/HomeGallery';
import FavoritesGallery from '../Route/FavoritesGallery';
import PhotoCollectionGallery from '../Route/PhotoCollectionGallery';

export default function GalleryPage() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <HomeGallery />
      </Route>
      <Route path={`${path}/favorites`}>
        <FavoritesGallery />
      </Route>
      <Route path={`${path}/photo-collections/:slug`}>
        <PhotoCollectionGallery />
      </Route>
      <Redirect to={`${path}`} />
    </Switch>
  );
}
