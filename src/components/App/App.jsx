import './App.css';
import React, { useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useAppHandlers from '../../utils/useAppHandlers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AuthForm from '../AuthForm/AuthForm';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Modal from '../Modal/Modal';

export default function App() {
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
    handleDeleteMovie,
    user,
    favoriteMovieList,
    searchResult,
    isModalVisible,
    isLoading,
  } = useAppHandlers();

  const currentUser = useMemo(() => user, [user]);

  useEffect(() => {
    handleOnLoad();

    const escHandler = (evt) => evt.key === 'Escape' && handleModalClose();
    document.addEventListener('keydown', escHandler);

    return () => {
      document.removeEventListener('keydown', escHandler);
    };
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signin" element={<AuthForm onSubmit={handleSignIn} isLoading={isLoading} />} />
          <Route path="signup" element={<AuthForm onSubmit={handleSignUp} isLoading={isLoading} />} />
          <Route
            path="movies"
            element={
              user && (
                <ProtectedRoute>
                  <Movies
                    onSearch={handleSearchMain}
                    isLoading={isLoading}
                    searchResult={searchResult}
                    handleShortMovie={handleShortMovie}
                    onPostMovie={handlePostFavoriteMovie}
                    onDeleteMovie={handleDeleteMovie}
                  />
                </ProtectedRoute>
              )
            }
          />
          <Route
            path="saved-movies"
            element={
              user && (
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
              )
            }
          />
          <Route
            path="profile"
            element={
              user && (
                <ProtectedRoute>
                  <Profile onSignOut={handleSignOut} onUpdate={handleUpdateUser} isLoading={isLoading} />
                </ProtectedRoute>
              )
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
