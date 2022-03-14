import './MoviesCardList.css';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoveisCard';
import { CAPTION, SCREEN_WIDTH } from '../../utils/const';

function MoviesCardList({ initData, onPostMovie, onDeleteMovie }) {
  const location = useLocation().pathname;
  const pageEndRef = useRef(null);
  const [moviesQuantity, setMoviesQuantity] = useState(null);
  const [moviesToAdd, setMoviesToAdd] = useState(null);

  const handleCardsQuantity = () => {
    if (window.innerWidth >= SCREEN_WIDTH.LARGE) {
      setMoviesQuantity(12);
    } else if (window.innerWidth >= SCREEN_WIDTH.MEDIUM) {
      setMoviesQuantity(8);
    } else {
      setMoviesQuantity(5);
    }
  };

  const handleMoreCards = () => {
    if (window.innerWidth < SCREEN_WIDTH.LARGE) {
      setMoviesToAdd(2);
    } else {
      setMoviesToAdd(3);
    }
  };

  const handleScrollToBottom = () => pageEndRef.current.scrollIntoView({ behavior: 'smooth' });

  const handleIdleState = () =>
  location === '/saved-movies' || initData.length <= moviesQuantity ? 'movies-card-list__button_idle' : '';

  const handleClick = () => {
    handleMoreCards();
    setMoviesQuantity(moviesQuantity + moviesToAdd);
    handleScrollToBottom();
    handleIdleState();
  };

  const renderCards = () =>
    initData
      .slice(0, moviesQuantity)
      .map((film) => (
        <MoviesCard
          key={location === '/movies' ? film.id : film._id}
          onPostMovie={onPostMovie}
          onDeleteMovie={onDeleteMovie}
          film={film}
        />
      ));

  const resizeThrottler = () => {
    setTimeout(() => {
      handleCardsQuantity();
      renderCards();
    }, 66);
  };


  useEffect(() => {
    handleCardsQuantity();
    handleMoreCards();
    window.addEventListener('resize', resizeThrottler, false);
    return () => window.removeEventListener('resize', resizeThrottler, false);
  }, []);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">{renderCards()}</div>
      <div className="movies-card-list__action">
        <button className={`movies-card-list__button ${handleIdleState()}`} type="button" onClick={handleClick}>
          {CAPTION.MORE}
        </button>
      </div>
      <div ref={pageEndRef} />
    </div>
  );
}

export default MoviesCardList;
