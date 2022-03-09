/* eslint-disable no-console */
import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoveisCard';
import { caption, screenWidth } from '../../utils/const';

function MoviesCardList({ initData, onCardClick }) {
  let index = 1;
  const location = useLocation().pathname;
  const [moviesQuantity, setMoviesQuantity] = useState(5);
  const handleCardsQuantity = () => {
    if (screenWidth.large > window.innerWidth > screenWidth.medium) {
      setMoviesQuantity(12);
    }
    if (screenWidth.medium > window.innerWidth > screenWidth.small) {
      setMoviesQuantity(8);
    }
    // return setMoviesQuantity(5);
  };
  const handleButtonClick = () => setMoviesQuantity(moviesQuantity + 3);

  const renderCards = () =>
    initData.map((film) => {
      if (index <= moviesQuantity) {
        return (
          <MoviesCard
            key={(index += 1)}
            duration={film.duration}
            description={film.description}
            image={`https://api.nomoreparties.co${film.image.url}`}
            onCardClick={onCardClick}
          />
        );
      }
      return null;
    });

  const resizeThrottler = () => {
    setTimeout(() => {
      handleCardsQuantity();
      renderCards();
    }, 66);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeThrottler, false);
    return () => window.removeEventListener('resize', resizeThrottler, false);
  }, []);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">{renderCards()}</div>
      <div className="movies-card-list__action">
        <button
          className={`movies-card-list__button ${location === '/saved-movies' ? 'movies-card-list__button_idle' : ''}`}
          type="button"
          onClick={handleButtonClick}
        >
          {caption.more}
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
