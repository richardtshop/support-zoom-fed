import React from 'react';
import '@shopify/polaris/dist/styles.css';
import {AppProvider} from '@shopify/polaris';
import {BrowserRouter as Router} from 'react-router-dom';

import '../../styles/App.scss';
import Routes from '../Routes';

import {Nav, Footer} from './components';

function App() {
  return (
    <AppProvider features={{newDesignLanguage: true}}>
      <Router>
        <div className="app">
          <Nav />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
