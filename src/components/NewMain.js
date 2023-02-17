import React from "react";
import ItemCard from "./ItemCard";
import ItemCardForSale from "./ItemCardForSale";

import "../blocks/Main.css";

function Main({ cards, handleCardClick, isLogged }) {
  return (
    <main className="main">
      {isLogged ? (
        <>
          <div>
            <p className="main__description">
              Algunas de las piezas que he restaurado y ya tienen un nuevo hogar
            </p>
            <div className="public__cards">
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
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="hidden__cards">
              {cards
                .filter((card) => card.private === true)
                .map((currentCard) => (
                  <ItemCardForSale
                    key={currentCard._id}
                    card={currentCard}
                    cardClick={() => handleCardClick(currentCard)}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Main;

{
  /* <main className="main">
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
</main> */
}
