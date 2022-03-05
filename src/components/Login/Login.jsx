import '../AuthForm/AuthForm.css';
import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPassChange = (e) => setPassword(e.target.value);
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ password, email });
  };

  return (
    <AuthForm onSubmit={handleLogin}>
      <label className="auth__label" htmlFor="emailInput">
        E-mail
        <input
          onChange={onEmailChange}
          type="email"
          className="auth__input"
          placeholder="Введите e-mail..."
          id="emailInput"
          value={email || ''}
          required
        />
      </label>
      <label className="auth__label" htmlFor="passInput">
        Пароль
        <input
          onChange={onPassChange}
          type="password"
          className="auth__input"
          placeholder="Введите пароль..."
          id="passInput"
          value={password || ''}
          required
        />
      </label>
    </AuthForm>
  );
}

export default Login;
