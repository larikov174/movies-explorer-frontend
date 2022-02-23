import './MoviesCard.css';
import './SFX.css';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function MoviesCard({ duration, description, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCardClick = () => setIsOpen(true);

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
      <Modal data={{ type: 'success', title: 'Сохранение успешно!' }} isOpen={isOpen} />
    </article>
  );
}

export default MoviesCard;
