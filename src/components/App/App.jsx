import './App.css';
import React, { useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useAppHandlers from '../../utils/useAppHandlers';
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
  const {
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
    user,
    favoriteMovieList,
    searchResult,
    isModalVisible,
    isLoading,
  } = useAppHandlers();

  const currentUser = useMemo(() => user, [user]);

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
                  onSearch={handleSearchMain}
                  isLoading={isLoading}
                  searchResult={searchResult}
                  handleShortMovie={handleShortMovie}
                  onPostMovie={handlePostFavoriteMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-movies"
            element={
              <ProtectedRoute>
                <SavedMovies
                  onLoad={handleFavoriteMovieList}
                  favoriteMovieList={favoriteMovieList}
                  onPostMovie={handlePostFavoriteMovie}
                  onDeleteMovie={handleDeleteFavoriteMovie}
                  isLoading={isLoading}
                  onSearch={handleSearchFavorite}
                  handleShortMovie={handleShortMovie}
                />
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
