import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation().pathname;

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

  const moviesPageHeader = () => (
    <header className="header header_theme_light">
      <Link className="header__link header__link_logo" to="/" />
      <div className="header__menu header__menu_theme_light">
        <NavLink className="header__link header__link_nav" to="/movies">
          Фильмы
        </NavLink>
        <NavLink className="header__link header__link_nav" to="/savedMovies">
          Сохраненные фильмы
        </NavLink>
      </div>
      <NavLink className="header__link header__link_nav header__link_profile" to="/profile">
        Аккаунт
        <span className="header__profile_decor" />
      </NavLink>
    </header>
  );

  return location === '/' ? mainPageHeader() : moviesPageHeader();
}

export default Header;
