import { moviesUrl } from "./const";

export default function useMoviesApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    getMovies() {
      return fetch(`${moviesUrl}`, {
        method: 'GET',
      }).then(handleResponse);
    },
  }
}
