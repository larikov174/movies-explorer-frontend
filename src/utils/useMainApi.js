import { baseUrl } from "./const";

export default function useMainApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    getUserInfo() {
      return fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        credentials: 'include',
      }).then(handleResponse);
    },

    setUserInfo(data) {
      return fetch(`${baseUrl}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(handleResponse);
    },
  }
}
