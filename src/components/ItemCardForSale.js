import React from "react";

import "../blocks/ItemCardForSale.css";

function ItemCardForSale(props) {
  const isBooked = props.card.booked === true;
  const isAdmin = props.isAdmin === true;

  const openModal = () => {
    props.cardClick(props.card);
  };

  const bookModal = () => {
    props.bookClick(props.card);
  };

  const deleteItem = () => {
    props.deleteClick(props.card);
  };

  return (
    <div className="card__wrapper-forsale">
      <img
        className="card-forsale__image"
        src={props.image}
        alt={props.name}
        onClick={openModal}
        name={props.name}
        price={props.price}
      />
      <div className="card-forsale__content">
        <h2 className="card-forsale__content-title">
          {props.name}, {props.price}€
        </h2>
        <div className="">
          {isAdmin ? (
            <button
              className="card-forsale__delete-button"
              type="button"
              onClick={deleteItem}
            >
              Delete
            </button>
          ) : (
            <button
              className={
                isBooked
                  ? "card-forsale__book-button"
                  : "card-forsale__book-button"
              }
              type="button"
              onClick={bookModal}
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCardForSale;

// function ItemCardForSale({ card, cardClick, bookClick }) {
//   return (
//     <div className="card__wrapper-forsale">
//       <img
//         className="card-forsale__image"
//         src={card.link}
//         alt={card.name}
//         onClick={cardClick}
//       />
//       <div className="card-forsale__content">
//         <h2 className="card-forsale__content-title">
//           {card.name}, {card.price}
//         </h2>
//         <div className="">
//           <button className="card-forsale__book-button" onClick={bookClick}>
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
