import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoveisCard';

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        </div>
      <div className="movies-card-list__action">
        <button className="movies-card-list__button" type="button">
          Еще
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
