/* eslint-disable no-console */
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation().pathname;
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const burgerMenu = () => {
    const activeStyle = {
      borderBottom: "1px solid #000",
      paddingBottom: "4px"
    };

    return (
    <div className={`burger-menu ${isMenuVisible ? 'visible' : ''}`}>
      <div className="burger-menu__overlay" />
      <div className="burger-menu__container">
      <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className="burger__link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink
        className="burger__link burger__link_profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/profile"
      >
        Аккаунт
        <span className="header__profile_decor" />
      </NavLink>
      </div>
    </div>
  )};

  const burgerButton = () => (
    <>
      <button
        type="button"
        className={`burger__button ${isMenuVisible ? 'burger__button_type_close' : ''}`}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      {burgerMenu()}
    </>
  );

  const mainPageHeader = () => (
    <header className="header">
      <Link className="header__link header__link_logo" to="/" />
      <div className="header__menu">
        <Link className="header__link header__link_signup" to="/signup">
          Регистрация
        </Link>
        <Link className="header__link header__link_signin" to="/signin">
          Войти
        </Link>
      </div>
    </header>
  );

  const moviesPageHeader = () => {
    const activeStyle = {
      fontWeight: 500
    };

    return (
    <header className="header header_theme_light">
      <Link className="header__link header__link_logo" to="/" />
      <div className="header__menu header__menu_theme_light">
        <NavLink
          className="header__link header__link_nav"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className="header__link header__link_nav"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <NavLink
        className="header__link header__link_nav header__link_profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/profile"
      >
        Аккаунт
        <span className="header__profile_decor" />
      </NavLink>
      {burgerButton()}
    </header>
  )};

  return location === '/' ? mainPageHeader() : moviesPageHeader();
}

export default Header;
