import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { caption } from '../../utils/const';

export default function MainHeader() {
  return (
    <header className="header">
      <Link className="header__link header__link_logo" to="/" />
      <div className="header__menu">
        <Link className="header__link header__link_signup" to="signup">
          {caption.signUp}
        </Link>
        <Link className="header__link header__link_signin" to="signin">
          {caption.signIn}
        </Link>
      </div>
    </header>
  );
}
