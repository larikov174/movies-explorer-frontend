import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="aboutProject">
      <h2 className="about-project__text about-project__text_title">О проекте</h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__text about-project__text_column-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__text about-project__text_column-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__schedule">
        <div className="about-project__column_backend">
          <p className="about-project__text about-project__text_centered about-project__text_green-background">1 неделя</p>
          <p className="about-project__text about-project__text_centered about-project__text_grey">Back-end</p>
        </div>
        <div className="about-project__column_frontend">
          <p className="about-project__text about-project__text_centered about-project__text_white-background">4 неделя</p>
          <p className="about-project__text about-project__text_centered about-project__text_grey">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
