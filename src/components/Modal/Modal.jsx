import './Modal.css';
import React, { useEffect } from 'react';

function Modal({ onOpen, onClose }) {
  const renderNotification = () => (
    <>
      <div
        className={`modal__icon ${onOpen.type === 'success' ? 'modal__icon_success' : 'modal__icon_denied'}`}
        role="img"
      />
      <h2 className="modal__title">{onOpen.title}</h2>
    </>
  );

  useEffect(() => {
    if (onOpen.visible) {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  });

  return (
    <section className={`modal ${onOpen.visible ? 'modal__visible' : ''}`}>
      <div className={`modal__container ${onOpen.type === 'success' ? 'modal__success' : 'modal__denied'}`}>
        {renderNotification()}
        <button type="button" className="modal__button" onClick={onClose} />
      </div>
    </section>
  );
}

export default Modal;
