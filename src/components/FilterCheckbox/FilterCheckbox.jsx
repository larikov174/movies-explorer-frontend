import './FilterCheckbox.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CAPTION } from '../../utils/const';

function FilterCheckbox({ onClick }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation().pathname;

  const handleChange = (e) => {
    setIsActive(e.target.checked);
    if (location === '/movies') localStorage.setItem('shortMovie', e.target.checked);
    if (location === '/saved-movies') localStorage.setItem('shortMovieFavorite', e.target.checked);
  };

  useEffect(() => {
    if (location === '/movies' && localStorage.shortMovie) return setIsActive(JSON.parse(localStorage.shortMovie));
    localStorage.setItem('shortMovieFavorite', isActive);
    return null;
  }, []);

  return (
    <div className="checkbox__container">
      <label className="checkbox__label" htmlFor="checkbox">
        <input
          className="checkbox__element"
          type="checkbox"
          id="checkbox"
          onChange={handleChange}
          onClick={onClick}
          checked={isActive}
        />
        <div className="checkbox__slider checkbox__round" />
      </label>
      <p className="checkbox__text">{CAPTION.SHORT_MOVIES}</p>
    </div>
  );
}

export default FilterCheckbox;
