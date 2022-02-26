import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function AuthForm({ children, onSubmit }) {
  const location = useLocation().pathname;
  const signUpDialog = {
    caption: 'Рады видеть!',
    buttonTitle: 'Зарегистрироваться',
    question: 'Уже зарегистрированы?',
    linkTitle: 'Войти',
    link: '/signin',
  };
  const signInDialog = {
    caption: 'Добро пожаловать!',
    buttonTitle: 'Войти',
    question: 'Ещё не зарегистрированы?',
    linkTitle: 'Регистрация',
    link: '/signup',
  };

  const renderLinks = (item) => (
    <div className="auth__actions">
      <button type="submit" className="auth__button">
        {item.buttonTitle}
      </button>
      <div className="auth__actions_link">
        <p className="auth__text">{item.question}&nbsp;</p>
        <Link className="auth__text auth__text_link" to={item.link}>
          {item.linkTitle}
        </Link>
      </div>
    </div>
  );

  const renderContent = (type) => (
    <>
      <h1 className="auth__title">{type.caption}</h1>
      <div className="auth__content">
        {children}
        {renderLinks(type)}
      </div>
    </>
  );

  return (
    <form className="auth" onSubmit={onSubmit}>
      <Link className="auth__logo" role="img" to="/" />
      {renderContent(location === '/signup' ? signUpDialog : signInDialog)}
    </form>
  );
}
