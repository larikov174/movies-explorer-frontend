import './Footer.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const currentDate = new Date();
  const location = useLocation().pathname;
  const allowedPages = ['/', '/movies', '/saved-movies'];
  const links = [
    { url: 'https://practicum.yandex.ru/', name: 'Яндекс.Практикум' },
    { url: 'https://github.com/larikov174', name: 'Github' },
    { url: 'https://www.facebook.com/profile.php?id=100009863322069', name: 'Facebook' },
  ];

  const getLink = () =>
    links.map((link) => (
      <a key={link.name} className="footer__text footer__text_link" href={link.url} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    ));

  const renderFooter = () => {
    if (allowedPages.includes(location)) {
      return (
        <footer className="footer">
          <p className="footer__text footer__text_credits">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__menu">
            <p className="footer__text">&copy; {currentDate.getFullYear()}</p>
            <nav className="footer__nav">{getLink()}</nav>
          </div>
        </footer>
      );
    }
    return null;
  };

  return renderFooter();
}

export default Footer;
