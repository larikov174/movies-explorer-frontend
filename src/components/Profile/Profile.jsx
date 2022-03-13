import './Profile.css';
import React, { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { CAPTION } from '../../utils/const';

function Profile({ onSignOut, onUpdate }) {
  const user = useContext(CurrentUserContext);
  const { values, handleChange, errors, setValues, isValid, resetForm } = useFormWithValidation();

  const handleChangeInput = (e) => handleChange(e);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ email: values.email, name: values.name });
    resetForm();
  };

  const handleSignOut = () => {
    onSignOut();
    resetForm();
  };

  useEffect(() => {
    setValues(user);
  }, [user, setValues]);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form className="profile__content" onSubmit={handleSubmit} noValidate>
        <div className="profile__row">
          <label htmlFor="userName" className="profile__text profile__text_subtitle">
            {CAPTION.NAME}
          </label>
          <input
            type="text"
            name="name"
            id="userName"
            className="profile__text profile__input"
            placeholder="Введите имя..."
            value={values.name || ''}
            pattern="^[A-Za-zА-Яа-яЁё\s-]{1,}$"
            minLength="2"
            onChange={handleChangeInput}
            required
          />
        </div>
        <span className="profile__text profile__error">{errors.name}</span>
        <div className="profile__row">
          <label htmlFor="userEmail" className="profile__text profile__text_subtitle">
            {CAPTION.EMAIL}
          </label>
          <input
            type="email"
            name="email"
            id="userEmail"
            className="profile__text profile__input"
            placeholder="Введите email..."
            value={values.email || ''}
            pattern="^[a-z0-9+_.-]+@[a-z0-9.-]+\.[a-z]+$"
            onChange={handleChangeInput}
            required
          />
        </div>
        <span className="profile__text profile__error">{errors.email}</span>
        <button type="submit" className="profile__button" disabled={!isValid}>
          {CAPTION.EDIT}
        </button>
        <button className="profile__link" type="button" onClick={handleSignOut}>
          {CAPTION.SIGN_OUT}
        </button>
      </form>
    </section>
  );
}

export default Profile;
