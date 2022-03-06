import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainPageHeader from '../MainPageHeader/MainPageHeader';
import MoviesPageHeader from '../MoviesPageHeader/MoviesPageHeader';

function Header({ onEnter }) {
  const location = useLocation().pathname;
  const allowedPages = ['/', '/movies', '/saved-movies', '/profile'];

  const renderHeader = () => {
    if (allowedPages.includes(location)) {
      return location === '/' ? <MainPageHeader onEnter={onEnter} /> : <MoviesPageHeader />;
    }
    return null;
  };
  return renderHeader();
}

export default Header;
