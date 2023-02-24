import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const BookModal = ({
  isOpen,
  onClose,
  closePopup,
  closeEsc,
  currentUser,
  card,
  onBook,
}) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(`${currentUser.email}`);
  }, [currentUser.email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onBook(card);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Book this beautiful item"
      name="book"
      onClose={onClose}
      closeEsc={closeEsc}
      closePopup={closePopup}
      handleSubmit={handleSubmit}
      buttonText="Book Now"
    >
      <label className="popup__input-label">Email</label>
      <input
        className="popup__input"
        type="text"
        name="email"
        value={email}
        placeholder={currentUser.email}
        onChange={handleEmail}
        required
      />
      <label className="popup__input-label">Item</label>
      <input
        className="popup__input"
        type="text"
        name="Item"
        value={card.name}
        placeholder={card.name}
        required
      />
    </ModalWithForm>
  );
};

export default BookModal;
