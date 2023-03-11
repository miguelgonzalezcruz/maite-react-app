import ModalWithNoForm from "./ModalWithNoForm";

const BookModal = ({ isOpen, onClose, closePopup, closeEsc, card }) => {
  return (
    <ModalWithNoForm
      isOpen={isOpen}
      name="book"
      onClose={onClose}
      closeEsc={closeEsc}
      closePopup={closePopup}
      buttonText="Book Now"
    >
      <div>
        <h1>Reserva: {card.name}</h1>
        <p>Envíame un email a maitereciclando@gmail.com</p>
        <p>Menciona esta información en tu mensaje:</p>
        <ul>
          <li>Artículo: {card.name}</li>
          <li>Precio: {card.price}</li>
          <li>Descripción: {card.description}</li>
        </ul>
      </div>
    </ModalWithNoForm>
  );
};

export default BookModal;
