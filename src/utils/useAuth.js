import { mainUrl } from './const';

export default function useAuth() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    checkToken() {
      return fetch(`${mainUrl}/check`, {
        method: 'GET',
        credentials: 'include',
      }).then(res => res.ok);
    },

    signup({ password, email, name }) {
      return fetch(`${mainUrl}/signup`, {
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
      return fetch(`${mainUrl}/signin`, {
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
      return fetch(`${mainUrl}/signout`, {
        method: 'GET',
        credentials: 'include',
      }).then(handleResponse);
    }
  }
}
