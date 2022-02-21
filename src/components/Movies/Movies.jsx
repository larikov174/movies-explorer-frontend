import './Movies.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default Movies;
