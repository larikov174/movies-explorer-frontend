import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__menu">
        <Link className="header__signup-btn" to="/signup">Регистрация</Link>
        <Link className="header__signin-btn" to="/signin">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
