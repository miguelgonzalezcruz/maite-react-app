import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const BookModal = ({ isOpen, onClose, closePopup, closeEsc, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleBook(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="book"
      name="book"
      onClose={onClose}
      closeEsc={closeEsc}
      closePopup={closePopup}
      handleSubmit={handleBook}
      buttonText="book"
    >
      <label className="popup__input-label">Email</label>
      <input
        className="popup__input"
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleEmail}
        required
      />
      <label className="popup__input-label">Password</label>
      <input
        className="popup__input"
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={handlePassword}
        required
      />
    </ModalWithForm>
  );
};

export default BookModal;
