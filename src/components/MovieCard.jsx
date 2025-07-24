import React from 'react';

const MovieCard = ({ movie, addToWatchlist, removeFromWatchlist, isWatchlist }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img
        src={movie.image}
        alt={movie.title}
        className="card-img-top"
        style={{ height: '300px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">⭐ Rating: {movie.rating}</p>
        {!isWatchlist ? (
          <button className="btn btn-primary" onClick={() => addToWatchlist(movie)}>
            Add to Watchlist
          </button>
        ) : (
          <button className="btn btn-danger" onClick={() => removeFromWatchlist(movie.id)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;