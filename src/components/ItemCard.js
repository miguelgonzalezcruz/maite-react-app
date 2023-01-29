import React from "react";
import "../blocks/ItemCard.css";

function ItemCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);

  const openModal = () => {
    props.onOpen(props.name, props.image);
  };

  return (
    <li>
      <div className="card__wrapper">
        <div className="card">
          <div className="card__title-container">
            <p className="card__title">{props.name}</p>
          </div>
          <div className="card__like-container">
            <button
              className={isLiked ? "card__like_active" : "card__like"}
              type="button"
              onClick={props.onLike}
            />
          </div>
        </div>
        <img
          className="card__image"
          src={props.image}
          alt={props.name}
          onClick={openModal}
          name={props.name}
        />
      </div>
    </li>
  );
}

export default ItemCard;
