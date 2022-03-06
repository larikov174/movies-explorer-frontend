import '../Header/Header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { caption } from '../../utils/const';

function MoviesPageHeader() {
  const activeStyle = {
    fontWeight: 500,
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
          {caption.movies}
        </NavLink>
        <NavLink
          className="header__link header__link_nav"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/saved-movies"
        >
          {caption.savedMovies}
        </NavLink>
      </div>
      <NavLink
        className="header__link header__link_nav header__link_profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/profile"
      >
        {caption.profile}
        <span className="header__profile_decor" />
      </NavLink>
    </header>
  );
}

export default MoviesPageHeader;
