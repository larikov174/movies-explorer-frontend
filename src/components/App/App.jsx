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
  const loaded = useRef(null);
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState({ type: '', title: '', visible: false });
  const navigate = useNavigate();
  const { signin } = useAuth();
  const { checkToken, getUserInfo } = useMainApi();

  const handleError = (err) => console.error(err);

  const currentUser = useMemo(() => ({ user }), []);

  const onLoadCheck = () => {
    checkToken().then((res) => (loaded.current = res));
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
              // getCards().then((initCards) => {
              //   setCards(initCards);
              // });
            })
            .finally(() => {
              navigate('/movies');
            });
        }
      })
      .catch((error) => {
        handleError(error);
        // setIsInfoTooltipState({ visible: true, queryApproved: false });
      });
  };

  useEffect(() => {
    if (loaded === null) return onLoadCheck();

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
          <Route path="/movies" element={<Movies onCardClick={handleModalOpen} />} />
          <Route path="/saved-movies" element={<SavedMovies onCardClick={handleModalOpen} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
          {/* TODO: ProtectedRoute заготовка для будущей итерации */}
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <BurgerMenu />
        <Modal onOpen={isModalVisible} onClose={closeAllModals} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
