/* eslint-disable no-console */
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import useMainApi from './useMainApi';
import useMoviesApi from './useMoviesApi';
import { MOVIE_LENGTH_LIMIT } from './const';

export default function useAppHandlers() {
  const token = useRef(null);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { movies, favorite, shortMovie } = localStorage;
  const localStorageMovies = movies ? JSON.parse(movies) : false;
  const localStoragFavoriteMovies = favorite ? JSON.parse(favorite) : false;
  let shortMovieOption = shortMovie ? JSON.parse(shortMovie) : false;
  const [user, setUser] = useState(null);
  const [favoriteMovieList, setFavoriteMovieList] = useState(localStoragFavoriteMovies);
  const [searchResult, setSearchResult] = useState(localStorageMovies);
  const [isModalVisible, setIsModalVisible] = useState({ visible: false });
  const [isLoading, setIsLoading] = useState(false);
  const { signin, signup, signout, checkToken } = useAuth();
  const { getUserInfo, setUserInfo, getFavoriteMovies, postToFavorite, deleteFromFavorite } = useMainApi();
  const { getMovies } = useMoviesApi();

  const handleError = (err) => console.error(err);

  const handleModalOpen = (message) => {
    setIsModalVisible({ type: message.type, title: message.title, visible: message.visible });
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleOnLoad = () => {
    checkToken()
      .then((res) => (token.current = res))
      .then(() => {
        if (token.current) {
          getUserInfo()
            .then((data) => setUser(data))
            .catch((error) => handleError(error));
        }
      })
      .catch((error) => {
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка получения данных.', visible: true });
      });
  };

  const handleSearchMain = (query) => {
    setIsLoading(true);
    getMovies()
      .then((allMovies) => {
        const result = allMovies.filter(
          (movie) =>
            (movie.nameRU && movie.nameRU.toLowerCase().includes(query.toLowerCase())) ||
            (movie.nameEN && movie.nameEN.toLowerCase().includes(query.toLowerCase())) ||
            (movie.description && movie.description.toLowerCase().includes(query.toLowerCase())),
        );
        localStorage.movies = JSON.stringify(result);
        setSearchResult(() => (shortMovieOption ? result.filter((movie) => movie.duration <= MOVIE_LENGTH_LIMIT) : result));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка загрузки данных.', visible: true });
      });
  };

  const handleSearchFavorite = (query) => {
    const result = localStoragFavoriteMovies.filter(
      (movie) =>
        (movie.nameRU && movie.nameRU.toLowerCase().includes(query.toLowerCase())) ||
        (movie.nameEN && movie.nameEN.toLowerCase().includes(query.toLowerCase())) ||
        (movie.description && movie.description.toLowerCase().includes(query.toLowerCase())),
    );
    setFavoriteMovieList(() => (shortMovieOption ? result.filter((movie) => movie.duration <= MOVIE_LENGTH_LIMIT) : result));
  };

  const handleShortMovie = () => {
    shortMovieOption = !shortMovieOption;

    if (location === '/movies') {
      if (localStorageMovies.length > 0) {
        const result = localStorageMovies.filter((movie) =>
          shortMovieOption ? movie.duration <= MOVIE_LENGTH_LIMIT : movie.duration >= MOVIE_LENGTH_LIMIT,
        );
        setSearchResult(result);
      }
    }

    if (location === '/saved-movies') {
      if (localStoragFavoriteMovies.length > 0) {
        const result = localStoragFavoriteMovies.filter((movie) =>
          shortMovieOption ? movie.duration <= MOVIE_LENGTH_LIMIT : movie.duration >= MOVIE_LENGTH_LIMIT,
        );
        setFavoriteMovieList(() => (shortMovieOption ? result : localStoragFavoriteMovies));
      }
    }
  };

  const handleFavoriteMovieList = () => {
    setIsLoading(true);
    getFavoriteMovies()
      .then((list) => {
        localStorage.favorite = JSON.stringify(list);
        setFavoriteMovieList(list);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка загрузки данных.', visible: true });
      });
  };

  const handlePostFavoriteMovie = (movie) => {
    setIsLoading(true);
    postToFavorite(movie)
      .then(() => {
        getFavoriteMovies()
          .then((list) => {
            localStorage.favorite = JSON.stringify(list);
            setFavoriteMovieList(list);
          })
          .catch((error) => {
            setIsLoading(false);
            handleError(error);
            handleModalOpen({ type: 'fail', title: 'Ошибка загрузки данных.', visible: true });
          });
      })
      .then(() => {
        setIsLoading(false);
        handleModalOpen({ type: 'success', title: 'Фильм сохранен успешно.', visible: true });
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка, сохранение не выполнено.', visible: true });
      });
  };

  const handleDeleteFavoriteMovie = (movie) => {
    const removeFromList = (deletedMovie) =>
      localStoragFavoriteMovies.filter((movieInList) => movieInList._id !== deletedMovie._id);

    setIsLoading(true);

    deleteFromFavorite(movie)
      .then((res) => {
        setFavoriteMovieList(removeFromList(res));
        localStorage.favorite = JSON.stringify(removeFromList(res));
      })
      .then(() => {
        setIsLoading(false);
        handleModalOpen({ type: 'success', title: 'Удалено успешно.', visible: true });
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка, удаление не выполнено.', visible: true });
      });
  };

  const handleSignIn = async ({ password, email }) => {
    setIsLoading(true);
    try {
      const res = await signin({ password, email });
      if (res.code === 200) {
        getUserInfo()
          .then((data) => setUser(data))
          .then(() => {
            handleFavoriteMovieList();
            navigate('/movies');
          })
          .catch((error) => handleError(error))
          .finally(() => setIsLoading(false));
      }
    } catch (error) {
      setIsLoading(false);
      handleError(error);
      handleModalOpen({ type: 'fail', title: 'Ошибка авторизации', visible: true });
    }
  };

  const handleSignUp = async ({ password, email, name }) => {
    setIsLoading(true);
    try {
      const res = await signup({ password, email, name });
      if (res._id) {
        setUser(res);
        navigate('/movies');
      }
    } catch (error) {
      setIsLoading(false);
      handleError(error);
      handleModalOpen({ type: 'fail', title: 'Ошибка авторизации', visible: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    setIsLoading(true);
    signout()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка завершения сессии.', visible: true });
      })
      .finally(() => {
        setIsLoading(false);
        setUser(null);
        localStorage.clear();
        setSearchResult([])
        handleModalOpen({ type: 'success', title: 'Сессия завершена.', visible: true });
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    setUserInfo({ name, email })
      .then((newData) => {
        setUser(newData);
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка обновления данных.', visible: true });
      })
      .finally(() => {
        setIsLoading(false);
        handleModalOpen({ type: 'success', title: 'Данные обновлены успешно.', visible: true });
      });
  };

  const handleDeleteMovie = (movie) => {
    const removeFromList = (deletedMovie) =>
      localStoragFavoriteMovies.filter((movieInList) => movieInList._id !== deletedMovie._id);

    const movieInList = (film) => localStoragFavoriteMovies.filter((movieinList) => movieinList.movieId === film.id)
    console.log(movieInList(movie)[0]);
    setIsLoading(true);

    deleteFromFavorite(movieInList(movie)[0])
      .then((res) => {
        setFavoriteMovieList(removeFromList(res));
        localStorage.favorite = JSON.stringify(removeFromList(res));
      })
      .then(() => {
        setIsLoading(false);
        handleModalOpen({ type: 'success', title: 'Удалено успешно.', visible: true });
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка, удаление не выполнено.', visible: true });
      });
  }

  return {
    handleModalClose,
    handleOnLoad,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleUpdateUser,
    handleSearchMain,
    handleSearchFavorite,
    handleShortMovie,
    handleFavoriteMovieList,
    handlePostFavoriteMovie,
    handleDeleteFavoriteMovie,
    handleDeleteMovie,
    user,
    favoriteMovieList,
    searchResult,
    isModalVisible,
    isLoading
  }
}
