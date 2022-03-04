import './App.css';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useAuth from '../../utils/useAuth';
import useMainApi from '../../utils/useMainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Modal from '../Modal/Modal';

function App() {
  const token = useRef(null);
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState({ type: '', title: '', visible: false });
  const navigate = useNavigate();
  const { signin, checkToken } = useAuth();
  const { getUserInfo } = useMainApi();

  const currentUser = useMemo(() => ({ user }), []);

  const handleError = (err) => console.error(err);

  const onLoadCheck = () => {
    checkToken().then((res) => (token.current = res));
  };

  const handleModalOpen = (message) => {
    setIsModalVisible({ type: message.type, title: message.title, visible: message.visible });
  };

  const closeAllModals = () => {
    setIsModalVisible(false);
  };

  const handleLogin = ({ password, email }) => {
    signin({ password, email })
      .then((res) => {
        if (res.login === 'ok') {
          getUserInfo()
            .then((data) => {
              setUser(data);
            })
            .then(() => {
              handleModalOpen({ type: 'success', title: 'Авторизация успешна!', visible: true });
            })
            .finally(() => {
              navigate('/movies');
            });
        }
      })
      .catch((error) => {
        handleError(error);
        handleModalOpen({ type: 'fail', title: 'Ошибка авторизации', visible: true });
      });
  };

  useEffect(() => {
    if (token === null) {
      onLoadCheck();
    }

    // if (token !== null) {
    //   getUserInfo()
    //     .then((data) => {
    //       setUser(data);
    //     })
    //     .finally(() => {
    //       navigate('/movies');
    //     });
    // }

    const escHandler = (evt) => evt.key === 'Escape' && closeAllModals();
    document.addEventListener('keydown', escHandler);

    return () => {
      document.removeEventListener('keydown', escHandler);
    };
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="movies"
            element={
              <ProtectedRoute>
                <Movies onCardClick={handleModalOpen} />
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
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <BurgerMenu />
        <Modal onOpen={isModalVisible} onClose={closeAllModals} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
