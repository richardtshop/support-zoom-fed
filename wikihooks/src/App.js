// To Do
// Remove server errors if resubmitting form but client errors (search blank)
// Error should be moved out of results?

import React, { useState } from 'react';
import './App.scss';

import { Header, SearchForm, Results } from './components';

const App = () => {
  const [fetchUrl, updateFetchUrl] = useState();

  return (
    <div className="App">
      <Header />
      <main>
        <SearchForm updateFetchUrl={updateFetchUrl} />
        {fetchUrl && <Results url={fetchUrl} />}
      </main>
    </div>
  );
};

export default App;
