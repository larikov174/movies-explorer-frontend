import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SIGN_UP_DIALOG, SIGN_IN_DIALOG } from '../../utils/const';

export default function AuthForm({ children, onSubmit }) {
  const location = useLocation().pathname;

  const renderLinks = (item) => (
    <div className="auth__actions">
      <button type="submit" className="auth__button">
        {item.BUTTON_TITLE}
      </button>
      <div className="auth__actions_link">
        <p className="auth__text">{item.QUESTION}&nbsp;</p>
        <Link className="auth__text auth__text_link" to={item.LINK_TITLE}>
          {item.LINK_TITLE}
        </Link>
      </div>
    </div>
  );

  const renderContent = (type) => (
    <>
      <h1 className="auth__title">{type.CAPTION}</h1>
      <div className="auth__content">
        {children}
        {renderLinks(type)}
      </div>
    </>
  );

  return (
    <form className="auth" onSubmit={onSubmit}>
      <Link className="auth__logo" role="img" to="/" />
      {renderContent(location === '/signup' ? SIGN_UP_DIALOG : SIGN_IN_DIALOG)}
    </form>
  );
}
