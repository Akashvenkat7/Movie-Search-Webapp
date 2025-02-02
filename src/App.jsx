// src/App.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const addToFavorites = (movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar favorites={favorites} />
      <Outlet context={{ favorites, addToFavorites }} />
    </div>
  );
};

export default App;