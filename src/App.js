import React, { Fragment, useEffect } from 'react';

// Materialize Imports
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Components
import { SearchBar } from './components/layout/SearchBar';
import { AddBtn } from './components/layout/AddBtn';
import { AddLogModal } from './components/logs/AddLogModal';
import { Logs } from './components/logs/Logs';

function App() {
  useEffect(() => {
    // Initializes Materialize Javascript
    M.AutoInit();
  });

  return (
    <div className='App'>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal/>
          <Logs />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
