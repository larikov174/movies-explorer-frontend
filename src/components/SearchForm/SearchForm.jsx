import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button" type="button">
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
