import './Profile.css';
import React, { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { caption } from '../../utils/const';

function Profile({ onSignOut, onUpdate }) {
  const { user } = useContext(CurrentUserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    return user && onUpdate({ name, email });
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <form className="profile__content" onSubmit={handleSubmit}>
        <div className="profile__row">
          <label htmlFor="userName" className="profile__text profile__text_subtitle">
            {caption.name}
          </label>
          <input
            onChange={onNameChange}
            type="text"
            className="profile__text profile__input"
            placeholder="Введите имя..."
            id="userName"
            value={name || 'Введите имя...'}
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
            placeholder="Введите email..."
            value={email || 'Введите email...'}
            onChange={onEmailChange}
            required
          />
        </div>
        <button type="submit" className="profile__button">
          {caption.edit}
        </button>
        <button className="profile__link" type="button" onClick={onSignOut}>
          {caption.signOut}
        </button>
      </form>
    </section>
  );
}

export default Profile;
