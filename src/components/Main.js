import Hero from "./Hero";
import ItemCard from "./ItemCard";
import ItemCardForSale from "./ItemCardForSale";

import "../blocks/Main.css";

function Main({
  cards,
  handleCardClick,
  handleCardBook,
  isLogged,
  currentUser,
}) {
  return (
    <section>
      {isLogged ? (
        <>
          {/* <div>
            <p className="main__title">
              Hello {currentUser.name}, you can start booking now.{" "}
            </p>
          </div> */}
          <div className="main">
            <div className="hidden__cards">
              {cards
                .filter((card) => card.private === true)
                .map((currentCard) => (
                  <ItemCardForSale
                    currentUser={currentUser}
                    key={currentCard._id}
                    card={currentCard}
                    cardClick={() => handleCardClick(currentCard)}
                    bookClick={() => handleCardBook(currentCard)}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main">
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
          </div>
        </>
      )}
    </section>
  );
}

export default Main;
