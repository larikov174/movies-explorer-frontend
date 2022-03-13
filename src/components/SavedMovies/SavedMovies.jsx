import './SavedMovies.css';
import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import Preloader from '../Preloader/Preloader';
import { caption } from '../../utils/const';

export default function SavedMovies({
  onLoad,
  favoriteMovieList,
  isLoading,
  onPostMovie,
  onDeleteMovie,
  onSearch,
  handleShortMovie,
}) {
  const [initData, setInitData] = useState(favoriteMovieList);

  useEffect(() => {
    if (!initData) {
      onLoad();
    }
  }, []);

  useEffect(() => {
    setInitData(favoriteMovieList);
  }, [favoriteMovieList]);

  const renderData = () => {
    if (initData && initData.length > 0)
      return <MoviesCardList initData={initData} onPostMovie={onPostMovie} onDeleteMovie={onDeleteMovie} />;
    return <EmptyCardList title={caption.empty} />;
  };

  return (
    <section className="saved-movies">
      <SearchForm onSubmit={onSearch} handleShortMovie={handleShortMovie} />
      {isLoading ? <Preloader /> : renderData()}
    </section>
  );
}
