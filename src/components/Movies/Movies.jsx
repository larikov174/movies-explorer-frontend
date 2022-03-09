import './Movies.css';
import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ onSearch, isLoading, searchResult, handleShortMovie, onCardClick }) {
  const [result, setResult] = useState(searchResult);
  const { query, movies } = localStorage;

  useEffect(() => {
    if (query) {
      onSearch(query);
    }
  }, []);

  useEffect(() => {
    if (movies) {
      setResult(JSON.parse(movies));
    }
    setResult(searchResult);
  }, [searchResult]);

  const renderData = () => {
    if (result && result.length > 0) return <MoviesCardList initData={result} onCardClick={onCardClick} />;
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
