import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container search-form__container_search">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button" type="button">
          Найти
        </button>
      </div>
      <div className="search-form__container search-form__container_check">
        <label htmlFor="checkbox" className="search-form__label">
          <input className="search-form__check" type="checkbox" id="checkbox" />
          <div className="search-form__slider search-form__round" />
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
