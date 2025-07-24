import React from 'react';
import MovieCard from './MovieCard';

const defaultMovies = [
  {
    id: 1,
    title: 'Inception',
    rating: 8.8,
    image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    rating: 9.0,
    image: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    rating: 8.6,
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
  }
];

const MovieList = ({
  movies = defaultMovies,
  searchTerm = '',
  addToWatchlist,
  removeFromWatchlist,
  isWatchlist
}) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-wrap">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            isWatchlist={isWatchlist}
          />
        ))
      ) : (
        <p>No matching movies found.</p>
      )}
    </div>
  );
};

export default MovieList;