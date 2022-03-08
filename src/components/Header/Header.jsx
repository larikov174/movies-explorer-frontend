import './Header.css';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainHeader from './MainHeader';
import MoviesHeader from './MoviesHeader';

export default function Header() {
  const location = useLocation().pathname;
  const allowedPages = ['/', '/movies', '/saved-movies', '/profile'];
  const currentUser = useContext(CurrentUserContext);

  const renderHeader = () => {
    if (allowedPages.includes(location)) {
      return currentUser ? <MoviesHeader /> : <MainHeader />;
    }
    return null;
  };
  return renderHeader();
}
