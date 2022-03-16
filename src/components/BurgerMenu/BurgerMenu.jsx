import './BurgerMenu.css';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function BurgerMenu() {
  const location = useLocation().pathname;
  const allowedPages = ['/', '/movies', '/saved-movies', '/profile'];
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const activeStyle = {
    borderBottom: '1px solid #000',
    paddingBottom: '4px',
  };

  const burgerMenu = () => (
    <div className={`burger-menu ${isMenuVisible ? 'visible' : ''}`}>
      <div className="burger-menu__overlay" />
      <div className="burger-menu__container">
        <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
          onClick={() => setIsMenuVisible(false)}
        >
          Главная
        </NavLink>
        <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/movies"
          onClick={() => setIsMenuVisible(false)}
        >
          Фильмы
        </NavLink>
        <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/saved-movies"
          onClick={() => setIsMenuVisible(false)}
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink
          className="burger__link burger__link_profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/profile"
          onClick={() => setIsMenuVisible(false)}
        >
          Аккаунт
          <span className="header__profile_decor" />
        </NavLink>
      </div>
    </div>
  );

  const burgerButton = () => (
    <>
      <button
        type="button"
        className={`burger__button ${isMenuVisible && 'burger__button_type_close'} ${
          location === '/' && 'burger__button_type_main'
        }`}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      {burgerMenu()}
    </>
  );

  const renderBurgerMenu = () => {
    if (allowedPages.includes(location)) {
      return burgerButton();
    }
    return null;
  };

  return renderBurgerMenu();
}

export default BurgerMenu;
