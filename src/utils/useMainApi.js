import { mainUrl } from "./const";

export default function useMainApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    async getUserInfo() {
      const res = await fetch(`${mainUrl}/users/me`, {
        method: 'GET',
        credentials: 'include',
      });
      return handleResponse(res);
    },

    async setUserInfo({ name, email }) {
      const res = await fetch(`${mainUrl}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email
        }),
      });
      return handleResponse(res);
    },

    async getFavoriteMovies() {
      const res = await fetch(`${mainUrl}/movies`, {
        method: 'GET',
        credentials: 'include',
      });
      return handleResponse(res);
    },

    async postToFavorite({
      country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId, }) {
      const res = await fetch(`${mainUrl}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId,
        }),
      });
      return handleResponse(res);
    },

    async deleteFromFavorite({ _id }) {
      const res = await fetch(`${mainUrl}/movies/${_id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      return handleResponse(res);
    }
  }
}
