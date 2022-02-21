/* eslint-disable no-console */
import './MoviesCard.css';
import React from 'react';
import image from '../../images/default-picture.png';

function MoviesCard() {
  return (
    <article className="movies-card">
      <div className="movies-card__poster" onMouseEnter={()=>console.log("enter")}>
        <img className="movies-card__image" alt="Обложка фильма" src={image} />
        <button className="movies-card__button" type="submit">
          Сохранить
        </button>
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">Название фильма</h2>
        <p className="movies-card__duration">1ч17м</p>
      </div>
    </article>
  );
}

export default MoviesCard;
