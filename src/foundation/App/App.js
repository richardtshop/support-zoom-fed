


import React,  { useState } from 'react';

import '../../styles/App.scss';
import { Nav, Footer } from './components';
import Routes from '../Routes';

function App() {
  const [count, updateCount] = useState(0);

  const handleClick = () => {
    updateCount(count + 1);
  };

  return (
    <div className="app">
      <Nav />
      <main>
        <button onClick={handleClick}>{count}</button>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
