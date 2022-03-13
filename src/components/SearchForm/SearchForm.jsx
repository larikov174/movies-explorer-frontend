import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { CAPTION } from '../../utils/const';

function SearchForm({ onSubmit, handleShortMovie }) {
  const [query, setQuery] = useState();
  const onInputChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('query', query);
    onSubmit(query);
  };

  useEffect(() => {
    if (localStorage.query) {
      setQuery(localStorage.query);
    }
  }, []);

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
          {CAPTION.FIND}
        </button>
      </form>
      <FilterCheckbox onClick={handleShortMovie}/>
    </section>
  );
}

export default SearchForm;
