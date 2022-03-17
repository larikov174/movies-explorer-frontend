import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { CAPTION } from '../../utils/const';

function SearchForm({ onSubmit, handleShortMovie, isChecked }) {
  const [query, setQuery] = useState();
  const location = useLocation().pathname;
  const onInputChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location === '/movies') localStorage.setItem('query', query);
    onSubmit(query);
  };

  useEffect(() => {
    if (location === '/movies') return localStorage.query && setQuery(localStorage.query);
    onSubmit('');
    return null;
  }, []);

  useEffect(()=>{
    if (location === '/saved-movies') {
      setQuery('')
    }
  }, [handleShortMovie])

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
      <FilterCheckbox onClick={handleShortMovie} isChecked={isChecked}/>
    </section>
  );
}

export default SearchForm;
