import React from 'react';
import ReactDOM from 'react-dom';
import './font/CaviarDreams-webfont.ttf';
import './font/Caviar_Dreams_Bold-webfont.ttf';
import './index.scss';
import App from './main/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

console.log('log from index');
