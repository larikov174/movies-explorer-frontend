import './AboutMe.css';
import React from 'react';
import image from '../../images/avatar.png';
import video from '../../images/avatar.mp4';

function AboutMe() {
  const links = [
    { url: 'https://www.facebook.com/profile.php?id=100009863322069', name: 'Facebook' },
    { url: 'https://github.com/larikov174', name: 'Github' },
  ];

  const getLink = () =>
    links.map((link) => (
      <a key={link.name} className="about-me__text about-me__text_link" href={link.url} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    ));

  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__text about-me__text_title">Студент</h2>
      <div className="about-me__columns">
        <div className="about-me__column">
          <h3 className="about-me__text about-me__text_column-title">Андрей Лариков</h3>
          <p className="about-me__text about-me__text_subtitle">Фронтенд-разработчик, 36 лет</p>
          <p className="about-me__text about-me__description">
            Я из Челябинска, закончил факультет экономики и финансов ЮУрГУ. Программированием как хобби увлекаюсь давно,
            но именно веб-разработку решил превратить в свою профессию. После окончания курсов Яндекс.Практикум, ищу
            постоянную работу в сфере IT.
          </p>
          <nav className="about-me__nav">{getLink()}</nav>
        </div>
        <video autoPlay loop muted inline="true" className="about-me__avatar" label="фотография студента">
          <source src={video} type="video/mp4" />
          <img src={image} alt="фотография студента" />
        </video>
      </div>
    </section>
  );
}

export default AboutMe;
