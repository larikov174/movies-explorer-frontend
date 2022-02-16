import './Movies.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
    </section>
  );
}

export default Movies;
