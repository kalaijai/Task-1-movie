import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((m) => m.id !== id));
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <h3 className="mb-4">Movies</h3>
        <MovieList
          title="All Movies"
          searchTerm={searchTerm}
          addToWatchlist={addToWatchlist}
        />

        <h3 className="mt-5">Watchlist</h3>
        <MovieList
          title="Watchlist"
          movies={watchlist}
          removeFromWatchlist={removeFromWatchlist}
          isWatchlist
        />
      </div>
    </div>
  );
};

export default App;