import React from "react";
import ItemCard from "./ItemCard";
import ItemCardForSale from "./ItemCardForSale";

import "../blocks/Main.css";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cards, handleCardClick, handleCardBook, isLogged, isAdmin }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section>
      {isLogged ? (
        <div>
          {isAdmin ? (
            <>
              <div className="main">
                <div className="hidden__cards">
                  {cards
                    .filter((card) => card.forsale === true)
                    .map((card) => (
                      <ItemCardForSale
                        currentUser={currentUser}
                        key={card._id}
                        card={card}
                        cardClick={() => handleCardClick(card)}
                        bookClick={() => handleCardBook(card)}
                        image={card.imageUrl}
                        price={card.price}
                        name={card.name}
                      />
                    ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="main">
                <div className="hidden__cards">
                  {cards
                    .filter((card) => card.forsale === true)
                    .map((card) => (
                      <ItemCardForSale
                        currentUser={currentUser}
                        key={card._id}
                        card={card}
                        cardClick={() => handleCardClick(card)}
                        bookClick={() => handleCardBook(card)}
                        image={card.imageUrl}
                        price={card.price}
                        name={card.name}
                      />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="main">
            <p className="main__description">
              Algunas de las piezas que he restaurado y ya tienen un nuevo hogar
            </p>
            <div className="main__cards">
              {cards
                .filter((card) => card.forsale === false)
                .map((card) => (
                  <ItemCard
                    key={card._id}
                    _id={card._id}
                    card={card}
                    name={card.name}
                    image={card.imageUrl}
                    cardClick={handleCardClick}
                    isLogged={isLogged}
                    currentUser={currentUser}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Main;
