import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainPageHeader from '../MainPageHeader/MainPageHeader';
import MoviesPageHeader from '../MoviesPageHeader/MoviesPageHeader';

function Header() {
  const location = useLocation().pathname;
  const allowedPages = ['/', '/movies', '/saved-movies', '/profile'];

  const renderHeader = () => {
    if (allowedPages.includes(location)) {
      return location === '/' ? <MainPageHeader /> : <MoviesPageHeader />;
    }
    return null;
  };
  return renderHeader();
}

export default Header;
