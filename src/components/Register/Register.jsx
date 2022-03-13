import '../AuthForm/AuthForm.css';
import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { CAPTION } from '../../utils/const';

function Register({ onSingUp }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPassChange = (e) => setPassword(e.target.value);
  const handleSignUp = (e) => {
    e.preventDefault();
    onSingUp({ password, email, name });
  };


  return (
    <AuthForm onSubmit={handleSignUp}>
      <label className="auth__label" htmlFor="nameInput">
        {CAPTION.NAME}
        <input
          onChange={onNameChange}
          type="text"
          className="auth__input"
          placeholder="Введите имя..."
          id="nameInput"
          value={name || ''}
          required
        />
      </label>
      <label className="auth__label" htmlFor="emailInput">
        {CAPTION.EMAIL}
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
        {CAPTION.PASSWORD}
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

export default Register;
