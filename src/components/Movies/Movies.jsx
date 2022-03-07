/* eslint-disable no-console */
import './Movies.css';
import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import defaultImage from '../../images/default-picture.png';
import useMoviesApi from '../../utils/useMoviesApi';

function Movies({ onCardClick }) {
  const [initData, setInitData] = useState(null);
  // const [searchResult, setSearchResult] = useState();
  const { getMovies } = useMoviesApi();

  const handleSearchQuery = () => {
    getMovies()
    .then((res)=>{
      console.log(res);
      // setSearchResult((res)=> data.)
    })
  }

  // TODO: удалить на следующей итерации, блок кода для демо прелоудера и фетча данных
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
    if (initData && initData.length > 0) return <MoviesCardList initData={initData} onCardClick={onCardClick} />;
    if (initData && initData.length === 0) return <EmptyCardList title="Фильмов в базе не обнаружено." />;
    return <Preloader />;
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearchQuery} />
      {renderData()}
    </section>
  );
}

export default Movies;
