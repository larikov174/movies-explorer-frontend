const baseUrl = 'http://localhost:3001';
// const baseUrl = 'https://api.larikov.nomoredomains.work';

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
}

export {
  baseUrl, signUpDialog, signInDialog, caption,
}
