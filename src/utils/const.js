const MY_DB = 'http://localhost:3001'
// const MY_DB = 'https://api.larikov.nomoredomains.work'
const MOVIES = 'https://api.nomoreparties.co'
const MOVIES_DB = `${MOVIES}/beatfilm-movies`

const SIGN_UP_DIALOG = {
  CAPTION: 'Рады видеть!',
  BUTTON_TITLE: 'Зарегистрироваться',
  QUESTION: 'Уже зарегистрированы?',
  LINK_TITLE: 'Войти',
  LINK: '/signin',
};

const SIGN_IN_DIALOG = {
  CAPTION: 'Добро пожаловать!',
  BUTTON_TITLE: 'Войти',
  QUESTION: 'Ещё не зарегистрированы?',
  LINK_TITLE: 'Регистрация',
  LINK: '/signup',
};

const CAPTION = {
  NAME: 'Имя',
  EMAIL: 'E-mail',
  PASSWORD: 'Пароль',
  EDIT: 'Редактировать',
  SIGN_OUT: 'Выйти из аккаунта',
  SIGN_UP: 'Регистрация',
  SIGN_IN: 'Войти',
  MOVIES: 'Фильмы',
  SAVED_MOVIES: 'Сохраненные фильмы',
  PROFILE: 'Аккаунт',
  FIND: 'Найти',
  MORE: 'Ещё',
  EMPTY: 'Ничего не найдено',
  SEARCH_FAIL: `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
}

const SCREEN_WIDTH = {
  LARGE: 1280,
  MEDIUM: 750,
}

const MOVIE_LENGTH_LIMIT = 40;

export {
  MY_DB,
  MOVIES,
  MOVIES_DB,
  SIGN_UP_DIALOG,
  SIGN_IN_DIALOG,
  CAPTION,
  SCREEN_WIDTH,
  MOVIE_LENGTH_LIMIT
}
