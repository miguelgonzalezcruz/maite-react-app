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
        <h1>Book now: {card.name}</h1>
        <p>Just send me an email to example@email.com.</p>
        <p>Remember to mention the following item information:</p>
        <ul>
          <li>Item: {card.name}</li>
          <li>Price: {card.price}</li>
          <li>Description: {card.description}</li>
        </ul>
      </div>
    </ModalWithNoForm>
  );
};

export default BookModal;
