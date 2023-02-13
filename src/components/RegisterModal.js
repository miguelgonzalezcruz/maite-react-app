import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  closePopup,
  closeEsc,
  onRegister,
  buttonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [typeofuser, settypeofuser] = useState("user");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setSurname("");
    setPhone("");
  }, [isOpen]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handletypeofuser = (e) => {
    settypeofuser(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password, name, surname, phone, typeofuser);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="register"
      name="register"
      onClose={onClose}
      closeEsc={closeEsc}
      closePopup={closePopup}
      handleSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="popup__input-label">Email</label>
      <input
        className="popup__input"
        type="email"
        name="email"
        value={email}
        placeholder="Enter email"
        onChange={handleEmail}
        required
      />
      <label className="popup__input-label">Password</label>
      <input
        className="popup__input"
        type="password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={handlePassword}
        required
      />
      <label className="popup__input-label">Name</label>
      <input
        className="popup__input"
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        onChange={handleName}
        required
      />
      <label className="popup__input-label">Surname</label>
      <input
        className="popup__input"
        type="text"
        name="surname"
        value={surname}
        placeholder="Enter surname"
        onChange={handleSurname}
        required
      />
      <label className="popup__input-label">Phone</label>
      <input
        className="popup__input"
        type="tel"
        name="phone"
        value={phone}
        placeholder="Enter phone"
        onChange={handlePhone}
        required
      />
      <input
        type="text"
        name="typeofuser"
        value={typeofuser}
        onChange={handletypeofuser}
        hidden
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
