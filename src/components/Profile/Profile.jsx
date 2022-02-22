import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Юзер!</h1>
      <div className="profile__content">
        <div className="profile__row">
          <p className="profile__text profile__text_subtitle">Имя</p>
          <p className="profile__text">Юзер</p>
        </div>
        <div className="profile__row">
          <p className="profile__text profile__text_subtitle">E-mail</p>
          <p className="profile__text">pochta@pochta.ru</p>
        </div>
      </div>
      <button type="button" className="profile__button">
        Редактировать
      </button>
      <Link className="profile__link" to="/signin">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
