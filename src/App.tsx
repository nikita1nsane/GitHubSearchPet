import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavouritesPage } from './Pages/FavouritesPage';
import { HomePage } from './Pages/HomePage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
      <Route path='/' element={ <HomePage/> } />
      <Route path='/favourites' element={ <FavouritesPage/> } />
    </Routes>
    </>
  );
}

export default App;
