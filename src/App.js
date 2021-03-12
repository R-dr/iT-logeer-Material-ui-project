import React, {Fragment, useEffect } from 'react';


// Materialize Imports
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Components
import {SearchBar} from './components/layout/SearchBar'
import {Logs} from './components/logs/Logs'

function App() {
  useEffect(() => {
    // Initializes Materialize Javascript
    M.AutoInit();
  });

  return (
    <div className='App'>
      <Fragment>
      <SearchBar/>
    <div className="container">
      <Logs/>
    </div>
      </Fragment>
      
      
    </div>
  );
}

export default App;
