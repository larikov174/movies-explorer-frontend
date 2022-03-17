import './FilterCheckbox.css';
import React, { useState, useEffect } from 'react';
import { CAPTION } from '../../utils/const';

function FilterCheckbox({ onClick }) {
  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    setIsActive(e.target.checked);
    localStorage.setItem('shortMovie', e.target.checked);
  };

  useEffect(() => {
    if (!localStorage.shortMovie) return (localStorage.shortMovie = false);
    return setIsActive(JSON.parse(localStorage.shortMovie));
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
