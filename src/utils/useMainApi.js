import { mainUrl } from "./const";

export default function useMainApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    getUserInfo() {
      return fetch(`${mainUrl}/users/me`, {
        method: 'GET',
        credentials: 'include',
      }).then(handleResponse);
    },

    setUserInfo({ name, email }) {
      return fetch(`${mainUrl}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email
        }),
      }).then(handleResponse);
    },
  }
}
