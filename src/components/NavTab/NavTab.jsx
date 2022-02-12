import React from 'react';
import './NavTab.css';

function NavTab() {
  const titles = [
    { id: '#aboutProject', name: 'О проекте' },
    { id: '#techs', name: 'Технологии' },
    { id: '#student', name: 'Студент' },
  ];

  const getTitle = () =>
    titles.map((title) => (
      <a key={title.name} className="nav-tab__link" href={title.id}>
        {title.name}
      </a>
    ));

  return (
    <section className="nav-tab">
      <nav className="nav-tab__menu">
        {getTitle()}
      </nav>
    </section>
  );
}

export default NavTab;
