// const baseUrl = 'http://localhost:3001/';
const baseUrl = 'https://api.larikov.nomoredomains.work';

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

export {
  baseUrl, signUpDialog, signInDialog
}
