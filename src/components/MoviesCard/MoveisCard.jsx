import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ onPostMovie, onDeleteMovie, film }) {
  const { favorite } = localStorage;
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  const minutes = film.duration % 60;
  const hours = (film.duration - minutes) / 60;
  const timeStamp = `${hours}ч ${minutes < 10 ? '0' : ''}${minutes}м`;

  const handleSave = () => onPostMovie(film);
  const handleDelete = () => onDeleteMovie(film);

  const renderSaveButton = () => (
    <button
      type="button"
      className={`movies-card__button ${isSaved && 'movies-card__button_saved'}`}
      onClick={isSaved ? null : handleSave}
    />
  );

  const renderDeleteButton = () => (
    <button type="button" className="movies-card__button movies-card__button_delete" onClick={handleDelete} />
  );

  useEffect(() => {
    setIsSaved(() => favorite && JSON.parse(favorite).some((item) => item.movieId === film.id));
  }, [favorite]);

  return (
    <article className="movies-card">
      <div className="movies-card__poster">
        <a href={location === '/movies' ? film.trailerLink : film.trailer} target="_blank" rel="noreferrer">
          <img
            className="movies-card__image movies-card__overlay"
            alt="Обложка фильма"
            src={location === '/movies' ? `https://api.nomoreparties.co${film.image.url}` : film.image}
          />
        </a>
        <span className="movies-card__overlay" />
        {location === '/movies' ? renderSaveButton() : renderDeleteButton()}
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{film.description}</h2>
        <p className="movies-card__duration">{timeStamp}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
