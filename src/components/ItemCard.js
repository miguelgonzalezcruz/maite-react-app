import React from "react";
import "../blocks/ItemCard.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isBooked = props.card.booked === true;

  const openModal = () => {
    props.cardClick(props.card);
  };

  return (
    <div className="card__wrapper">
      <div className="card"></div>
      <img
        className="card__image"
        src={props.image}
        alt={props.name}
        onClick={openModal}
        name={props.name}
      />
    </div>
  );
}

export default ItemCard;

// function ItemCard({ card, cardClick }) {
//   return (
//     <div className="card__wrapper">
//       <div className="card"></div>
//       <img
//         className="card__image"
//         src={card.link}
//         alt={card.name}
//         onClick={cardClick}
//       />
//     </div>
//   );
// }
