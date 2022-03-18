import './Movies.css';
import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { MOVIE_LENGTH_LIMIT } from '../../utils/const';

function Movies({ onSearch, isLoading, searchResult, handleShortMovie, onPostMovie, onDeleteMovie }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
      setResult(() =>
        localStorage.shortMovie === 'true'
          ? searchResult.filter((movie) => movie.duration <= MOVIE_LENGTH_LIMIT)
          : searchResult,
        );
  }, [localStorage.shortMovie]);

  const renderData = () => {
    if (result && result.length > 0)
      return <MoviesCardList initData={result} onPostMovie={onPostMovie} onDeleteMovie={onDeleteMovie} />;
    return <EmptyCardList />;
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={onSearch} handleShortMovie={handleShortMovie} />
      {isLoading ? <Preloader /> : renderData()}
    </section>
  );
}

export default Movies;
