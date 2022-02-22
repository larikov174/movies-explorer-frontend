import './MoviesCard.css';
import './SFX.css';
import React, { useState } from 'react';

function MoviesCard({duration, description, image}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <article className="movies-card">
      <div className="movies-card__poster" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <img className="movies-card__image" alt="Обложка фильма" src={image} />
        <button className={`movies-card__button ${isVisible ? 'visible slide' : ''}`} type="submit">
          Сохранить
        </button>
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{description}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
