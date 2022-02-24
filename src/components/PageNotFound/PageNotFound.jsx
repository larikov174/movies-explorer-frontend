import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <h1 className="page__text page__text_title">404</h1>
      <p className="page__text page__text_subtitle">Страница не найдена</p>
      <Link className="page__text page__text_link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
