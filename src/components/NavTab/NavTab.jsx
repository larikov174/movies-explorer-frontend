import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  const titles = [
    { id: '#aboutProject', name: 'О проекте' },
    { id: '#techs', name: 'Технологии' },
    { id: '#student', name: 'Студент' },
  ];

  const getTitle = () =>
    titles.map((title) => (
      <Link className="nav-tab__link" to={title.id}>
        {title.name}
      </Link>
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
