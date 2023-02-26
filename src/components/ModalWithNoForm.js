import React from "react";
import "../blocks/ModalWithForm.css";

function ModalWithNoForm({
  isOpen,
  closePopup,
  children,

  name,
  title,
}) {
  return (
    <div
      className={`popup popup__${name} ${isOpen ? `popup_open` : ""}`}
      onClick={closePopup}
    >
      <div className="popup__content">
        <h2 className="popup__title">{title}</h2>
        {children}

        <button className="popup__close" onClick={closePopup}></button>
      </div>
    </div>
  );
}

export default ModalWithNoForm;
