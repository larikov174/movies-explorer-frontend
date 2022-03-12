import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ onPostMovie, film }) {
  const { favorite } = localStorage;
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  const minutes = film.duration % 60;
  const hours = (film.duration - minutes) / 60;
  const timeStamp = `${hours}ч ${minutes < 10 ? '0' : ''}${minutes}м`;

  const handleSave = () => onPostMovie(film);
  const handleDelete = () => null;

  const renderCardOnMoviesPage = () => (
    <a
      className={`movies-card__overlay ${isSaved && 'movies-card__overlay_saved'}`}
      href={film.trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <button
        type="button"
        className={`movies-card__button ${isSaved && 'movies-card__button_saved'}`}
        onClick={isSaved ? handleDelete : handleSave}
      />
    </a>
  );

  const renderCardOnSavedMoviesPage = () => (
    <a className="movies-card__overlay" href={film.trailer} target="_blank" rel="noreferrer">
      <button type="button" className="movies-card__button movies-card__button_delete" onClick={handleDelete} />
    </a>
  );

  useEffect(() => {
    setIsSaved(() => favorite && JSON.parse(favorite).some((item) => item.movieId === film.id));
  }, [favorite]);

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
