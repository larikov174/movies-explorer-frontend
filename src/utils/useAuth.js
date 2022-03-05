import { baseUrl } from './const';

export default function useAuth() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    checkToken() {
      return fetch(`${baseUrl}/check`, {
        method: 'GET',
        credentials: 'include',
      }).then(res => res.ok);
    },

    signup({ password, email, name }) {
      return fetch(`${baseUrl}/signup`, {
        method: 'POST',
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
      return fetch(`${baseUrl}/signin`, {
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
      return fetch(`${baseUrl}/signout`, {
        method: 'GET',
        credentials: 'include',
      }).then(handleResponse);
    }
  }
}
