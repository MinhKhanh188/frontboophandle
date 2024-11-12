// src/pages/Home.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import LocationSearch from './customer/LocationSearch';
import SearchResult from './customer/SearchResult';

function Home() {
  //const { cars } = useContext(AppContext);

  return (
    <div>

      <h2>This is the Home page</h2>
      <LocationSearch />
      <SearchResult />


    </div>
  );
}

export default Home;
