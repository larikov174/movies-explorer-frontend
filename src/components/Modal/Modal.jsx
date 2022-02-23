import './Modal.css';
import React, { useState, useEffect } from 'react';

function Modal({ data, isOpen }) {
  const [isVisible, setIsVisible] = useState(isOpen);
  const renderNotification = (note) => (
    <>
      <div className={`modal__icon ${note.type === 'success' ? 'modal__icon_success' : 'modal__icon_denied'}`} role="img" />
      <h2 className="modal__title">{note.title}</h2>
    </>
  );

  const handleModalClose = () => setIsVisible(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        handleModalClose();
      }, 1500);
    }
  },[]);

  return (
    <section className={`modal ${isVisible ? 'modal__visible' : ''}`}>
      <div className="modal__container modal__slide">
        {renderNotification(data)}
        <button type="button" className="modal__button" onClick={handleModalClose} />
      </div>
    </section>
  );
}

export default Modal;
