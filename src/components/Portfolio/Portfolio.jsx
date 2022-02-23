import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const links = [
    { url: 'https://larikov174.github.io/how-to-learn/index.html', name: 'Статичный сайт' },
    { url: 'https://larikov174.github.io/russian-travel/index.html', name: 'Адаптивный сайт' },
    { url: 'https://larikov174.github.io/mesto-react/index.html', name: 'Одностраничное приложение' },
  ];

  const getLink = () =>
    links.map((link) => (
      <li key={link.name}>
        <a key={link.name} className="portfolio__text portfolio__link" href={link.url} target="_blank" rel="noreferrer">
          <p className="portfolio__text portfolio__text_link">{link.name}</p>
          <span className="portfolio__arrow" />
        </a>
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
