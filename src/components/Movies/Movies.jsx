import './Movies.css';
import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const length = 18;
  const moviesDB = Array(length).fill({
    image: '../../images/default-picture.png',
    description: 'Название фильма',
    duration: '1ч 17м',
  });
  const [initData, setInitData] = useState(null);

  setTimeout(() => {
    setInitData(moviesDB);
  }, 3000);

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
        <Preloader />
      </>
    );
  };

  return <section className="movies">{renderData()}</section>;
}

export default Movies;
