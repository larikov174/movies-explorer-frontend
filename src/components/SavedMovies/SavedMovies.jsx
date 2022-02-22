/* eslint-disable no-console */
import './SavedMovies.css';
import React, { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import defaultImage from '../../images/default-picture.png';

function SavedMovies() {
  const length = 4;
  const moviesDB = Array(length).fill({
    image: defaultImage,
    description: 'Название фильма',
    duration: '1ч 17м',
  });
  const [initData, setInitData] = useState(null);

  setTimeout(() => {
    setInitData(moviesDB);
  }, 500);

  const renderData = () => {
    if (initData && initData.length > 0) {
      return (
        <>
          <SearchForm />
          <MoviesCardList initData={initData} />
        </>
      );
    }
    return (
      <>
        <SearchForm />
        <EmptyCardList title="Сохранённых фильмов не обнаружено." />
      </>
    );
  };

  return <section className="saved-movies">{renderData()}</section>;
}

export default SavedMovies;
