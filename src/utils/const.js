const mainUrl = 'http://localhost:3001'
// const baseUrl = 'https://api.larikov.nomoredomains.work'
const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'

const signUpDialog = {
  caption: 'Рады видеть!',
  buttonTitle: 'Зарегистрироваться',
  question: 'Уже зарегистрированы?',
  linkTitle: 'Войти',
  link: '/signin',
};

const signInDialog = {
  caption: 'Добро пожаловать!',
  buttonTitle: 'Войти',
  question: 'Ещё не зарегистрированы?',
  linkTitle: 'Регистрация',
  link: '/signup',
};

const caption = {
  name: 'Имя',
  email: 'E-mail',
  password: 'Пароль',
  edit: 'Редактировать',
  signOut: 'Выйти из аккаунта',
  signUp: 'Регистрация',
  signIn: 'Войти',
  movies: 'Фильмы',
  savedMovies: 'Сохраненные фильмы',
  profile: 'Аккаунт',
  find: 'Найти',
  empty: 'Ничего не найдено',
  searchFail: `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
}

export {
  mainUrl,
  moviesUrl,
  signUpDialog,
  signInDialog,
  caption,
}
