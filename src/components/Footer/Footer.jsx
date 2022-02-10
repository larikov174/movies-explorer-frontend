import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const links = [
    { link: 'https://practicum.yandex.ru/', name: 'Яндекс.Практикум' },
    { link: 'https://github.com/larikov174', name: 'Github' },
    { link: 'https://www.facebook.com/profile.php?id=100009863322069', name: 'Facebook' },
  ];

  const getLink = () =>
    links.map((link) => (
      <Link key={link.name} className="footer__link" to={link.id}>
        {link.name}
      </Link>
    ));

  return (
    <footer className="footer">
      <div className="footer__credits">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__menu">
        <p className="footer__copyright">c2022</p>
        <nav className="footer__nav">
          {getLink()}
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
