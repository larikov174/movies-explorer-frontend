import './AuthForm.css';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SIGN_UP_DIALOG, SIGN_IN_DIALOG, CAPTION } from '../../utils/const';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function AuthForm({ onSubmit }) {
  const location = useLocation().pathname;
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleChangeInput = (e) => handleChange(e);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsNotAvailable(true);
    try {
      await onSubmit({ email: values.email, name: values.name, password: values.password });
    } finally {
      setIsNotAvailable(false);
      resetForm();
    }
  };

  useEffect(() => () => setIsNotAvailable(false), []);

  const renderNameInput = () => (
    <>
      <label htmlFor="nameInput" className="auth__label">
        {CAPTION.NAME}
        <input
          type="text"
          name="name"
          id="userName"
          className="auth__input"
          placeholder="Введите имя..."
          value={values.name || ''}
          pattern="^[A-Za-zА-Яа-яЁё\s-]{1,}$"
          minLength="2"
          onChange={handleChangeInput}
          disabled={isNotAvailable}
          required
        />
      </label>
      <span className="profile__text profile__error">{errors.name}</span>
    </>
  );

  const renderContent = (content) => (
    <>
      <h1 className="auth__title">{content.CAPTION}</h1>
      <div className="auth__content">
        {location === '/signup' && renderNameInput()}
        <label className="auth__label" htmlFor="emailInput">
          {CAPTION.EMAIL}
          <input
            type="email"
            name="email"
            id="userEmail"
            className="auth__input"
            placeholder="Введите email..."
            value={values.email || ''}
            pattern="^[a-z0-9+_.-]+@[a-z0-9.-]+\.[a-z]+$"
            onChange={handleChangeInput}
            disabled={isNotAvailable}
            required
          />
        </label>
        <span className="profile__text profile__error">{errors.email}</span>
        <label className="auth__label" htmlFor="passInput">
          {CAPTION.PASSWORD}
          <input
            type="password"
            name="password"
            id="passInput"
            className="auth__input"
            placeholder="Введите пароль..."
            value={values.password || ''}
            minLength="3"
            onChange={handleChangeInput}
            disabled={isNotAvailable}
            required
          />
        </label>
        <span className="profile__text profile__error">{errors.password}</span>
        <div className="auth__actions">
          <button type="submit" className="auth__button" disabled={!isValid}>
            {content.BUTTON_TITLE}
          </button>
          <div className="auth__actions_link">
            <p className="auth__text">{content.QUESTION}&nbsp;</p>
            <Link className="auth__text auth__text_link" to={content.LINK}>
              {content.LINK_TITLE}
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Link className="auth__logo" role="img" to="/" />
      {renderContent(location === '/signup' ? SIGN_UP_DIALOG : SIGN_IN_DIALOG)}
    </form>
  );
}
