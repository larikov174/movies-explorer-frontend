import './Profile.css';
import React from 'react';

function Profile({onSignOut}) {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Юзер!</h1>
      <form className="profile__content">
        <div className="profile__row">
          <label htmlFor="userName" className="profile__text profile__text_subtitle">
            Имя
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="profile__text profile__input"
            placeholder="Введите имя..."
            required
          />
        </div>
        <div className="profile__row">
          <label htmlFor="userEmail" className="profile__text profile__text_subtitle">
            E-mail
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="profile__text profile__input"
            placeholder="pochta@pochta.ru"
            required
          />
        </div>
      <button type="submit" className="profile__button">
        Редактировать
      </button>
      </form>
      <button className="profile__link" type="button" onClick={onSignOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
