import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './App/layout/Loader/index'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import config from './config';

import { store, persistor } from './store/storage'
import 'react-toastify/dist/ReactToastify.css';

const app = (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename={config.basename}>
        <>
          <App />
          <ToastContainer position={'bottom-right'} />
        </>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
