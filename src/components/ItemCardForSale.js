import "../blocks/ItemCardForSale.css";

function ItemCardForSale({ card, cardClick, bookClick }) {
  return (
    <div className="card__wrapper-forsale">
      <img
        className="card-forsale__image"
        src={card.link}
        alt={card.name}
        onClick={cardClick}
      />
      <div className="card-forsale__content">
        <h2 className="card-forsale__content-title">
          {card.name}, {card.price}
        </h2>
        <div className="">
          <button className="card-forsale__book-button" onClick={bookClick}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCardForSale;
