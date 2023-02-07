import "../blocks/ItemCard.css";

function ItemCard({ card, cardClick }) {
  return (
    <div className="card__wrapper">
      <div className="card"></div>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={cardClick}
      />
    </div>
  );
}

export default ItemCard;
