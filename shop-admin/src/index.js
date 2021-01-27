// Sandbox link: https://codesandbox.io/s/shop-admin-clone-f0iz2?file=/src/components/Products/Products.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  colors: {
    topBar: {
      background: '#1C2260',
    },
  },
};


ReactDOM.render(
  <AppProvider theme={theme} i18n={enTranslations} features={{newDesignLanguage: false}} >
    <App />
  </AppProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
