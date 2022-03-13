import { MY_DB } from './const';

export default function useAuth() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    checkToken() {
      return fetch(`${MY_DB}/check`, {
        method: 'GET',
        credentials: 'include',
      }).then(res => res.ok);
    },

    signup({ password, email, name }) {
      return fetch(`${MY_DB}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          email,
          name
        }),
      }).then(handleResponse);
    },

    signin({ password, email }) {
      return fetch(`${MY_DB}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          email,
        }),
      }).then(handleResponse);
    },

    signout() {
      return fetch(`${MY_DB}/signout`, {
        method: 'GET',
        credentials: 'include',
      }).then(handleResponse);
    }
  }
}
