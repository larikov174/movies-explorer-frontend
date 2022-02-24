import './SavedMovies.css';
import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import Preloader from '../Preloader/Preloader';
import defaultImage from '../../images/default-picture.png';

function SavedMovies() {
  const [initData, setInitData] = useState(null);

  // TODO: удалить на следующей итерации, блок кода для демо прелоудера
  useEffect(() => {
    const length = 0;
    const moviesDB = Array(length).fill({
      image: defaultImage,
      description: 'Название фильма',
      duration: '1ч 17м',
    });
    setTimeout(() => {
      setInitData(moviesDB);
    }, 3000);
  }, []);

  const renderData = () => {
    if (initData && initData.length > 0) return <MoviesCardList initData={initData} />;
    if (initData && initData.length === 0) return <EmptyCardList title="Сохранённых фильмов не обнаружено." />;
    return <Preloader />;
  };

  return (
    <section className="saved-movies">
      <SearchForm />
      {renderData()}
    </section>
  );
}

export default SavedMovies;
