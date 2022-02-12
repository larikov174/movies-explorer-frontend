import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  const links = [
    { url: 'https://practicum.yandex.ru/', name: 'Статичный сайт' },
    { url: 'https://practicum.yandex.ru/', name: 'Адаптивный сайт' },
    { url: 'https://practicum.yandex.ru/', name: 'Одностраничное приложение' },
  ];

  const getLink = () =>
    links.map((link) => (
      <li key={link.name}>
        <Link key={link.name} className="portfolio__text portfolio__link" to={link.url}>
          <p className="portfolio__text portfolio__text_link">{link.name}</p>
          <span className="portfolio__arrow" />
        </Link>
      </li>
    ));

  return (
    <section className="portfolio">
      <h2 className="portfolio__text portfolio__text_title">Портфолио</h2>
      <ul className="portfolio__list">{getLink()}</ul>
    </section>
  );
}

export default Portfolio;
