import { MY_DB, MOVIES } from "./const";

export default function useMainApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    async getUserInfo() {
      const res = await fetch(`${MY_DB}/users/me`, {
        method: 'GET',
        credentials: 'include',
      });
      return handleResponse(res);
    },

    async setUserInfo({ name, email }) {
      const res = await fetch(`${MY_DB}/users/me`, {
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
      const res = await fetch(`${MY_DB}/movies`, {
        method: 'GET',
        credentials: 'include',
      });
      return handleResponse(res);
    },

    async postToFavorite({
      country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id, }) {
      const res = await fetch(`${MY_DB}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: country || 'остуствует',
          director: director || 'остуствует',
          duration: duration || 0,
          year: year || 'остуствует',
          description: description || 'остуствует',
          nameRU: nameRU || 'остуствует',
          nameEN: nameEN || 'остуствует',
          movieId: id,
          trailer: trailerLink || '../images/default-picture.png',
          image: `${MOVIES}${image.url}` || '../images/default-picture.png',
          thumbnail: `${MOVIES}${image.formats.thumbnail.url}` || '../images/default-picture.png',
        }),
      });
      return handleResponse(res);
    },

    async deleteFromFavorite({ _id }) {
      const res = await fetch(`${MY_DB}/movies/${_id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      return handleResponse(res);
    }
  }
}
