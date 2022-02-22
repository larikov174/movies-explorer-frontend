import './MoviesCardList.css';
import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoveisCard';

function MoviesCardList({ initData }) {
  const [moviesQuantity, setMoviesQuantity] = useState(12);
  const handleButtonClick = () => setMoviesQuantity(moviesQuantity + 3);

  const renderCards = () =>
    initData.map((film, index) => {
      if (index + 1 <= moviesQuantity) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <MoviesCard key={index + 1} duration={film.duration} description={film.description} image={film.image} />
        );
      }
      return null;
    });

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">{renderCards()}</div>
      <div className="movies-card-list__action">
        <button className="movies-card-list__button" type="button" onClick={handleButtonClick}>
          Еще
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
