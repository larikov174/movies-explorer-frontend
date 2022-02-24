import './EmptyCardList.css';
import React from 'react';

function EmptyCardList({ title }) {
  return (
    <section className="empty-list">
      <h2 className="empty-list__title">{title}</h2>
    </section>
  );
}

export default EmptyCardList;
