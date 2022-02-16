import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form___container search-form__container_search">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button" type="button">
          Найти
        </button>
      </div>
      <div className="search-form__container search-form__container_check">
        <input className="search-form__check" type="checkbox" id="serchCheck" />
        <label htmlFor="serchCheck" className="search-form__text">
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
