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
import UploaderMenu from '../Uploader/UI/Menu/UploaderMenu';
import UploaderPage from '../Uploader/UI/Page/UploaderPage';

function App() {
  return (
    <Router>
      <AppLayout
        menu={
          <AppMenu>
            <UploaderMenu routePrefix="/upload" />
            <AppMenuSeparator />
            <GalleryMenu routePrefix="/gallery" />
          </AppMenu>
        }
        page={
          <Switch>
            <Route path="/upload">
              <UploaderPage />
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
