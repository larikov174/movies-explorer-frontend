import './MoviesCard.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ duration, description, image, onCardClick }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  // TODO: добавить провеку результатов сохранения фильма в базу, пока всегда успешно
  const handleCardClick = () => {
    if (location === '/movies'){
      setIsSaved(true);
      onCardClick({ type: 'success', title: 'Сохранение успешно!', visible: true });
    }
    return onCardClick({ type: 'success', title: 'Удалено успешно!', visible: true });
  };

  const renderCardOnMoviesPage = () => {
    if (isSaved) {
      return (
        <div className="movies-card__overlay movies-card__overlay_saved" role="presentation">
          <button type="button" className="movies-card__button movies-card__button_saved" />
        </div>
      );
    }
    return (
      <div className="movies-card__overlay" role="presentation">
        <button type="button" className="movies-card__button" onClick={handleCardClick} />
      </div>
    );
  };

  const renderCardOnSavedMoviesPage = () => (
      <div className="movies-card__overlay" role="presentation">
        <button type="button" className="movies-card__button movies-card__button_delete" onClick={handleCardClick} />
      </div>
    );

  return (
    <article className="movies-card">
      <div className="movies-card__poster">
        <img className="movies-card__image" alt="Обложка фильма" src={image} />
        {location === '/movies' ? renderCardOnMoviesPage() : renderCardOnSavedMoviesPage()}
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{description}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
