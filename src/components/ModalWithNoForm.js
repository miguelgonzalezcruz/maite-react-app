import React from "react";
import "../blocks/ModalWithNoForm.css";

function ModalWithNoForm({
  isOpen,
  closePopup,
  children,

  name,
  title,
}) {
  return (
    <div
      className={`popupnf popupnf__${name} ${isOpen ? `popupnf_open` : ""}`}
      onClick={closePopup}
    >
      <div className="popupnf__content">
        <h2 className="popupnf__title">{title}</h2>
        {children}

        <button className="popupnf__close" onClick={closePopup}></button>
      </div>
    </div>
  );
}

export default ModalWithNoForm;
