import React from 'react';
import './Techs.css';

function Techs() {
  const techNames = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];
  const showTechs = () =>
    techNames.map((name) => (
      <li key={name} className="techs__text techs__cell">
          {name}
      </li>
    ));

  return (
    <section className="techs" id="techs">
      <h2 className="techs__text techs__text_title">Технологии</h2>
      <p className="techs__text techs__text_subtitle">7 технологий</p>
      <p className="techs__text techs__text_article">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__display">{showTechs()}</ul>
    </section>
  );
}

export default Techs;
