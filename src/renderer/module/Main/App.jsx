import React from 'react';
import {
  MemoryRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import AppMenu from './Menu/AppMenu';
import AppMenuSeparator from './Menu/AppMenuSeparator';
import GalleryMenu from '../Gallery/UI/Menu/GalleryMenu';
import GalleryPage from '../Gallery/UI/Page/GalleryPage';
import CollectionCreatorMenu from '../CollectionCreator/UI/Menu/CollectionCreatorMenu';
import CollectionCreatorPage from '../CollectionCreator/UI/Page/CollectionCreatorPage';

function App() {
  return (
    <Router>
      <AppLayout
        menu={
          <AppMenu>
            <CollectionCreatorMenu routePrefix="/upload" />
            <AppMenuSeparator />
            <GalleryMenu routePrefix="/gallery" />
          </AppMenu>
        }
        page={
          <Switch>
            <Route path="/upload">
              <CollectionCreatorPage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Redirect to="/gallery" />
          </Switch>
        }
      />
    </Router>
  );
}

export default App;
