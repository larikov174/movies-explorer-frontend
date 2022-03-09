/* eslint-disable no-console */
import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoveisCard';
import { caption, screenWidth } from '../../utils/const';

function MoviesCardList({ initData, onCardClick }) {
  let index = 1;
  const location = useLocation().pathname;
  const [moviesQuantity, setMoviesQuantity] = useState(null);

  const handleCardsQuantity = () => {
    if (window.innerWidth >= screenWidth.large) {
      setMoviesQuantity(12);
    } else if (window.innerWidth >= screenWidth.medium) {
      setMoviesQuantity(8);
    } else {
      setMoviesQuantity(5);
    }
  };

  const handleMoreCards = () => (
    window.innerWidth < screenWidth.large
      ? setMoviesQuantity(moviesQuantity + 2)
      : setMoviesQuantity(moviesQuantity + 3)
  )

  const handleIdleState = () => (
    location === '/saved-movies' || index === moviesQuantity
      ? 'movies-card-list__button_idle'
      : ''
  )

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
      handleIdleState();
      renderCards();
    }, 66);
  };

  useEffect(() => {
    handleCardsQuantity();
    window.addEventListener('resize', resizeThrottler, false);
    return () => window.removeEventListener('resize', resizeThrottler, false);
  }, []);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">{renderCards()}</div>
      <div className="movies-card-list__action">
        <button
          className={`movies-card-list__button ${handleIdleState()}`}
          type="button"
          onClick={handleMoreCards}
        >
          {caption.more}
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
