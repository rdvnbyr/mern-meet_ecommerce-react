import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProductProvider} from './context'

ReactDOM.render(
  <ProductProvider>
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
    </Provider>
  </ProductProvider>
,
  document.getElementById('root')
);

serviceWorker.unregister();
