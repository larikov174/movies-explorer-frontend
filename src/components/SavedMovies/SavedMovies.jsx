import './SavedMovies.css';
import React, { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import defaultImage from '../../images/default-picture.png';

function SavedMovies() {
  const length = 2;
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
    if (initData) {
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
        <SearchForm />
      </>
    );
  };

  return (
    <section className="saved-movies">
      {renderData()}
    </section>
  );
}

export default SavedMovies;
