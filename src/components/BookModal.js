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
        <h1>Book this beautiful {card.name}</h1>
        <p>Just send me an email to example@email.com.</p>
        <p>Please remember to mention the item information:</p>
        <p>Item: {card.name}</p>
        <p>Price: {card.price}</p>
        <p>Description: {card.description}</p>
      </div>
    </ModalWithNoForm>
  );
};

export default BookModal;
