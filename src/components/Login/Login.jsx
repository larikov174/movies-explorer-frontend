import '../AuthForm/AuthForm.css';
import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm>
      <label className="auth__label" htmlFor="nameInput">
        Имя
        <input type="text" className="auth__input" placeholder="Введите имя..." id="nameInput" required />
      </label>
      <label className="auth__label" htmlFor="emailInput">
        E-mail
        <input type="email" className="auth__input" placeholder="Введите e-mail..." id="emailInput" required />
      </label>
    </AuthForm>
  );
}

export default Login;
