import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { caption } from '../../utils/const';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <input className="search-form__input" type="text" name="search" placeholder="Фильм" required />
        <button className="search-form__button" type="submit">
          {caption.find}
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
