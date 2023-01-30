import React from "react";
import "../blocks/ItemCard.css";

function ItemCard({ _id, name, image }) {
  return (
    <li>
      <div className="card__wrapper">
        <div className="card"></div>
        <img className="card__image" src={image} alt={name} name={name} />
      </div>
    </li>
  );
}

export default ItemCard;
