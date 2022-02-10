import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
