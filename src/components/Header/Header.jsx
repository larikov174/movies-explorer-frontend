import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__link header__link_logo" to="/" />
      <div className="header__menu">
        <Link className="header__link header__link_signup" to="/signup">Регистрация</Link>
        <Link className="header__link header__link_signin" to="/signin">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
