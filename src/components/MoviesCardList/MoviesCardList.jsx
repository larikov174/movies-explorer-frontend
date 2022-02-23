import './MoviesCardList.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoveisCard';

function MoviesCardList({ initData }) {
  let index = 1;
  const location = useLocation().pathname;
  const [moviesQuantity, setMoviesQuantity] = useState(12);
  const handleButtonClick = () => setMoviesQuantity(moviesQuantity + 3);

  const renderCards = () =>
    initData.map((film) => {
      if (index <= moviesQuantity) {
        return <MoviesCard key={(index += 1)} duration={film.duration} description={film.description} image={film.image} />;
      }
      return null;
    });

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">{renderCards()}</div>
      <div className="movies-card-list__action">
        <button
          className={`movies-card-list__button ${location === '/saved-movies' ? 'movies-card-list__button_idle' : ''}`}
          type="button"
          onClick={handleButtonClick}
        >
          Еще
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
