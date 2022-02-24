import './MoviesCard.css';
import React, { useState } from 'react';

function MoviesCard({ duration, description, image, onCardClick }) {
  const [isSaved, setIsSaved] = useState(false);
  // TODO: добавить провеку результатов сохранения фильма в базу, пока всегда успешно
  const handleCardClick = () => {
    setIsSaved(true);
    onCardClick({ type: 'success', title: 'Сохранение успешно!', visible: true });
  };

  const renderCardStyle = () => {
    if (isSaved) {
      return (
        <div className="movies-card__overlay movies-card__overlay_saved" role="presentation">
          <span className="movies-card__decor movies-card__decor_saved" />
        </div>
      );
    }
    return (
      <div className="movies-card__overlay" onClick={handleCardClick} role="presentation">
        <span className="movies-card__decor" />
      </div>
    );
  };

  return (
    <article className="movies-card">
      <div className="movies-card__poster">
        <img className="movies-card__image" alt="Обложка фильма" src={image} />
        {renderCardStyle()}
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{description}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
