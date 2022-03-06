/* eslint-disable no-console */
import './Profile.css';
import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { caption } from '../../utils/const';

function Profile({onSignOut}) {
  const { user } = useContext(CurrentUserContext);
  console.log(user);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {user.name}</h1>
      <form className="profile__content">
        <div className="profile__row">
          <label htmlFor="userName" className="profile__text profile__text_subtitle">
            {caption.name}
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="profile__text profile__input"
            placeholder="Введите имя..."
            value={user.name || ''}
            required
          />
        </div>
        <div className="profile__row">
          <label htmlFor="userEmail" className="profile__text profile__text_subtitle">
            {caption.email}
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="profile__text profile__input"
            placeholder="pochta@pochta.ru"
            value={user.email || ''}
            required
          />
        </div>
      <button type="submit" className="profile__button">
        {caption.edit}
      </button>
      </form>
      <button className="profile__link" type="button" onClick={onSignOut}>
        {caption.signOut}
      </button>
    </section>
  );
}

export default Profile;
