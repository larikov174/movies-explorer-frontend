import './Movies.css';
import React, { useState, useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import useMoviesApi from '../../utils/useMoviesApi';

function Movies({ onCardClick }) {
  const [searchResult, setSearchResult] = useState([]);
  const { getMovies } = useMoviesApi();

  const handleSearchQuery = (query) => {
    getMovies()
      .then((movies) => {
        const result = movies.filter(
          (movie) =>
            (movie.nameRU && movie.nameRU.toLowerCase().includes(query.toLowerCase())) ||
            (movie.nameEN && movie.nameEN.toLowerCase().includes(query.toLowerCase())) ||
            (movie.description && movie.description.toLowerCase().includes(query.toLowerCase())),
        );
        localStorage.setItem('movies', JSON.stringify(result))
        setSearchResult(result)
      });
  };

  useEffect(()=>{
    if(localStorage.movies) {
      setSearchResult(JSON.parse(localStorage.movies))
    }
  },[])

  const renderData = () => {
    if (searchResult && searchResult.length > 0) return <MoviesCardList initData={searchResult} onCardClick={onCardClick} />;
    if (searchResult && searchResult.length === 0) return <EmptyCardList />;
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
