import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoveisCard';

function MoviesCardList({ initData }) {
  const renderCards = () =>
    initData.map((film) => (
      <MoviesCard key={film.description} duration={film.duration} description={film.description} image={film.image} />
    ));

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__content">
        {renderCards()}
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
