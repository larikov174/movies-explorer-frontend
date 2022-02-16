import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
  return (
      <div className="checkbox__container">
        <label className="checkbox__label" htmlFor="checkbox">
          <input className="checkbox__element" type="checkbox" id="checkbox" />
          <div className="checkbox__slider checkbox__round" />
        </label>
        <p className="checkbox__text">Короткометражки</p>
      </div>
  );
}

export default FilterCheckbox;
