import React from 'react';
import {
  MemoryRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import GalleryPage from '../Gallery/UI/Page/GalleryPage';
import AppMenu from './Menu/AppMenu';
import GalleryMenu from '../Gallery/UI/Menu/GalleryMenu';

function App() {
  return (
    <Router>
      <AppLayout
        menu={
          <AppMenu>
            <GalleryMenu routePrefix="/gallery" />
          </AppMenu>
        }
        page={
          <Switch>
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
