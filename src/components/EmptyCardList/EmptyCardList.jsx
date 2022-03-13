import './EmptyCardList.css';
import React from 'react';
import { CAPTION } from '../../utils/const';

function EmptyCardList() {
  return (
    <section className="empty-list">
      <h2 className="empty-list__title">{CAPTION.EMPTY}</h2>
    </section>
  );
}

export default EmptyCardList;
