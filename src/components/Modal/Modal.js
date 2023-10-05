import React from 'react';

export const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button
          className="modal__close"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <div className="modal__content">
          {content}
        </div>
      </div>
    </div>
  )
}