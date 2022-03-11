import './MoviesCard.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ onPostMovie, film }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  const minutes = film.duration % 60;
  const hours = (film.duration - minutes) / 60;
  const timeStamp = `${hours}ч ${minutes < 10 ? '0' : ''}${minutes}м`;

  const handleCardClick = () => {
    onPostMovie(film);
    if (location === '/movies') {
      setIsSaved(isSaved);
    }
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
        <img
          className="movies-card__image"
          alt="Обложка фильма"
          src={location === '/movies' ? `https://api.nomoreparties.co${film.image.url}` : film.image}
        />
        {location === '/movies' ? renderCardOnMoviesPage() : renderCardOnSavedMoviesPage()}
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{film.description}</h2>
        <p className="movies-card__duration">{timeStamp}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
