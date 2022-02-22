import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function AuthForm({ children, onSubmit }) {
  const location = useLocation().pathname;
  const signUpDialog = {
    buttonTitle: 'Зарегистрироваться',
    question: 'Уже зарегистрированы?',
    linkTitle: 'Войти',
    link: '/signin',
  };
  const signInDialog = {
    buttonTitle: 'Войти',
    question: 'Ещё не зарегистрированы?',
    linkTitle: 'Регистрация',
    link: '/signup',
  };

  const renderTitles = (user) => (
    <div className="auth__actions">
      <button type="submit" className="auth__button">
        {user.buttonTitle}
      </button>
      <div className="auth__actions_link">
        <p className="auth__text">{user.question}&nbsp;</p>
        <Link className="auth__link" to={user.link}>
          {user.linkTitle}
        </Link>
      </div>
    </div>
  );

  return (
    <form className="auth" onSubmit={onSubmit}>
      {children}
      {location === '/signup' ? renderTitles(signUpDialog) : renderTitles(signInDialog)}
    </form>
  );
}
