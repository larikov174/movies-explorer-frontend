/* eslint-disable no-console */
import './FilterCheckbox.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CAPTION } from '../../utils/const';

function FilterCheckbox({ onClick, isChecked }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation().pathname;

  const handleChange = (e) => {
    setIsActive(e.target.checked);
    isChecked(isActive);
  };

  useEffect(() => {
    if (location === 'movie' && localStorage.shortMovie) setIsActive(localStorage.shortMovie)
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
