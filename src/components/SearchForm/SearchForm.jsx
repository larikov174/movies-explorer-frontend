import './SearchForm.css';
import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { caption } from '../../utils/const';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState();
  const onInputChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('query', query);
    onSubmit(query);
  };

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          value={query || ''}
          onChange={onInputChange}
          required
        />
        <button className="search-form__button" type="submit">
          {caption.find}
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
