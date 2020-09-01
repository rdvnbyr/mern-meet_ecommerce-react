import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
