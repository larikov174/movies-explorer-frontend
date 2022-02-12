import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  const links = [
    { url: 'https://www.facebook.com/profile.php?id=100009863322069', name: 'Facebook' },
    { url: 'https://github.com/larikov174', name: 'Github' },
  ];

  const getLink = () =>
    links.map((link) => (
      <Link key={link.name} className="about-me__text about-me__text_link" to={link.url}>
        {link.name}
      </Link>
    ));

  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__text about-me__text_title">Студент</h2>
      <div className="about-me__columns">
        <div className="about-me__column">
          <h3 className="about-me__text about-me__text_column-title">Андрей Лариков</h3>
          <p className="about-me__text about-me__text_subtitle">Фронтенд-разработчик, 36 лет</p>
          <p className="about-me__text about-me__description">
            Я родился в Воронеже, живу в Челябинске, закончил факультет экономики и финансов ЮУрГУ.
          </p>
          <p className="about-me__text about-me__description">
            У меня есть жена, двое детей и собака. Люблю поиграть на гитаре, зимой люблю покататься на беговых лыжах, а летом
            на роликах.
          </p>
          <p className="about-me__text about-me__description">
            Программированием как хобби увлекаюсь давно, но именно веб-разработку решил превратить в свою профессию. После
            окончания курсов Яндекс.Практикум, ищу постоянную работу в сфере IT.
          </p>
          <nav className="about-me__nav">{getLink()}</nav>
        </div>
        <div className="about-me__avatar" role="img" label="фотография студента" />
      </div>
    </section>
  );
}

export default AboutMe;
