import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({
  isOpen,
  onClose,
  closePopup,
  closeEsc,
  onAddItem,
  buttonText,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [forsale, setForSale] = useState("");

  useEffect(() => {
    setName("");
    setPrice("");
    setImageUrl("");
    setDescription("");
  }, [isOpen]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleForSale = (e) => {
    setForSale(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, price, imageUrl, description, forsale });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Add new item"
      name="add-item"
      buttonText={buttonText}
      onClose={onClose}
      closePopup={closePopup}
      closeEsc={closeEsc}
      handleSubmit={handleSubmit}
    >
      <label className="popup__input-label">Name</label>
      <input
        className="popup__input"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleName}
        required
      />
      <label className="popup__input-label">Price</label>
      <input
        className="popup__input"
        type="text"
        name="price"
        placeholder="Price"
        value={price}
        onChange={handlePrice}
        required
      />
      <label className="popup__input-label">Image URL</label>
      <input
        className="popup__input"
        type="url"
        name="image"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleImageUrl}
        required
      />
      <label className="popup__input-label">Description</label>
      <input
        className="popup__input"
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleDescription}
        required
      />
      <label className="popup__input-label">For Sale</label>
      <label className="popup__input-text" htmlFor="sale">
        <input
          className="popup__input-radio"
          type="radio"
          id="sale"
          value="true"
          name="forsale"
          onChange={handleForSale}
          required
        />
        Yes
      </label>
      <label className="popup__input-text" htmlFor="not-sale">
        <input
          className="popup__input-radio"
          type="radio"
          id="not-sale"
          value="false"
          name="forsale"
          onChange={handleForSale}
          required
        />
        No
      </label>
    </ModalWithForm>
  );
};

export default AddItemModal;
