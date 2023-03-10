import React from "react";
import ItemCard from "./ItemCard";
import ItemCardForSale from "./ItemCardForSale";

import "../blocks/Main.css";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  handleCardClick,
  handleCardBook,
  handleCardDelete,
  isLogged,
  isAdmin,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section>
      {isLogged ? (
        <div>
          {isAdmin ? (
            <>
              <div>
                <h1>Cards for Sale</h1>
              </div>
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
                        deleteClick={() => handleCardDelete(card._id)}
                        image={card.imageUrl}
                        price={card.price}
                        name={card.name}
                        isAdmin={isAdmin}
                      />
                    ))}
                </div>
              </div>
              <div>
                <h1>Public Cards</h1>
              </div>
              <div className="main">
                <div className="hidden__cards">
                  {cards
                    .filter((card) => card.forsale === false)
                    .map((card) => (
                      <ItemCard
                        currentUser={currentUser}
                        key={card._id}
                        card={card}
                        cardClick={() => handleCardClick(card)}
                        deleteClick={() => handleCardDelete(card._id)}
                        image={card.imageUrl}
                        price={card.price}
                        name={card.name}
                        isAdmin={isAdmin}
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
                        isAdmin={isAdmin}
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
