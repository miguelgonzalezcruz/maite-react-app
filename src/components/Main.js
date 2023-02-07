import ItemCard from "./ItemCard";

import "../blocks/Main.css";

function Main({ cards, handleCardClick }) {
  return (
    <main className="main">
      <p className="main__description">
        Algunas de las piezas que he restaurado y ya tienen un nuevo hogar
      </p>
      <div className="main__cards">
        {cards
          .filter((card) => card.private === false)
          .map((currentCard) => (
            <ItemCard
              key={currentCard._id}
              card={currentCard}
              cardClick={() => handleCardClick(currentCard)}
            />
          ))}
      </div>
    </main>
  );
}

export default Main;
