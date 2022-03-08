/* eslint-disable no-console */
import './App.css';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useAuth from '../../utils/useAuth';
import useMainApi from '../../utils/useMainApi';
import useMoviesApi from '../../utils/useMoviesApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Modal from '../Modal/Modal';

function App() {
  const token = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState({ type: '', title: '', visible: false });
  const [isLoading, setIsLoading] = useState(false);
  const { signin, signup, signout, checkToken } = useAuth();
  const { getUserInfo, setUserInfo } = useMainApi();
  const { getMovies } = useMoviesApi();

  const currentUser = useMemo(() => user, [user]);

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

  const handleSignIn = async ({ password, email }) => {
    setIsLoading(true);
    try {
      const res = await signin({ password, email });
      if (res.code === 200) {
        getUserInfo()
          .then((data) => setUser(data))
          .then(() => navigate('/movies'))
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
      if (res) {
        setUser(res);
        navigate('/movies');
      }
    } catch (error) {
      setIsLoading(false);
      handleError(error);
      handleModalOpen({ type: 'fail', title: 'Ошибка авторизации', visible: true });
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

  const handleSearchQuery = (query) => {
    setIsLoading(true);
    getMovies()
      .then((movies) => {
        const result = movies.filter(
          (movie) =>
            (movie.nameRU && movie.nameRU.toLowerCase().includes(query.toLowerCase())) ||
            (movie.nameEN && movie.nameEN.toLowerCase().includes(query.toLowerCase())) ||
            (movie.description && movie.description.toLowerCase().includes(query.toLowerCase())),
        );
        localStorage.setItem('movies', JSON.stringify(result));
        setSearchResult(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка загрузки данных.', visible: true });
      });
  };

  const handleShortMovie = () => {
    const movies = JSON.parse(localStorage.movies);
    const shortOption = localStorage.shortMovie;
    const movieLengthLimit = 40;
    const result = movies.filter((movie) => movie.duration <= movieLengthLimit);
    console.log(result);

    if (shortOption) return setSearchResult(movies.filter((movie) => movie.duration <= movieLengthLimit));
    return setSearchResult(movies);

    // return setSearchResult(result);
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={isLoading ? <Preloader /> : <Login onLogin={handleSignIn} />} />
          <Route path="/signup" element={isLoading ? <Preloader /> : <Register onSingUp={handleSignUp} />} />
          <Route
            path="movies"
            element={
              <ProtectedRoute>
                <Movies
                  onSearch={handleSearchQuery}
                  isLoading={isLoading}
                  searchResult={searchResult}
                  handleShortMovie={handleShortMovie}
                  onCardClick={handleModalOpen}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-movies"
            element={
              <ProtectedRoute>
                <SavedMovies onCardClick={handleModalOpen} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile onSignOut={handleSignOut} onUpdate={handleUpdateUser} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <BurgerMenu />
        <Modal onOpen={isModalVisible} onClose={handleModalClose} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
