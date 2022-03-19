import { MOVIES_DB } from "./const";

export default function useMoviesApi() {

  const handleResponse = (res) => {
    const answer = res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    async getMovies() {
      const res = await fetch(`${MOVIES_DB}`, {
        method: 'GET',
      });
      return handleResponse(res);
    },
  }
}
