import './EmptyCardList.css';
import React from 'react';
import { caption } from '../../utils/const';

function EmptyCardList() {
  return (
    <section className="empty-list">
      <h2 className="empty-list__title">{caption.empty}</h2>
    </section>
  );
}

export default EmptyCardList;
