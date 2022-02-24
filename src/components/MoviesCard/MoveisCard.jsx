import './MoviesCard.css';
import './SFX.css';
import React from 'react';

function MoviesCard({ duration, description, image, onCardClick }) {
  // TODO: добавить провеку результатов сохранения фильма в базу, пока всегда успешно
  const handleCardClick = () => onCardClick({ type: 'success', title: 'Сохранение успешно!', visible: true });

  return (
    <article className="movies-card">
      <div className="movies-card__poster">
        <img className="movies-card__image" alt="Обложка фильма" src={image} />
        <div className="movies-card__overlay" onClick={handleCardClick} role="presentation">
          <span className="movies-card__decor" />
        </div>
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{description}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
