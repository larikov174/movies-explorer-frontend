import './SavedMovies.css';
import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import Preloader from '../Preloader/Preloader';
import { caption } from '../../utils/const';

export default function SavedMovies({ onLoad, favoriteMovieList, isLoading, onCardClick }) {
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    onLoad();
    setInitData(favoriteMovieList);
  }, []);

  const renderData = () => {
    if (initData && initData.length > 0) return <MoviesCardList initData={initData} onCardClick={onCardClick} />;
    return <EmptyCardList title={caption.empty} />;
  };

  return (
    <section className="saved-movies">
      <SearchForm />
      {isLoading ? <Preloader /> : renderData()}
    </section>
  );
}
