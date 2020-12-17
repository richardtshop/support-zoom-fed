import React, { useState } from 'react';

import '@shopify/polaris/dist/styles.css';
import { AppProvider } from '@shopify/polaris';

import '../../styles/App.scss';
import { Nav, Footer } from './components';
import Routes from '../Routes';

function App() {
  return (
    <AppProvider features={{ newDesignLanguage: true }}>
      <div className="app">
        <Nav />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
