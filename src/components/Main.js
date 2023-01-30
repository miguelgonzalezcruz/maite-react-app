import React from "react";

import ItemCard from "./ItemCard";

import "../blocks/Main.css";

function Main({ cards }) {
  return (
    <main className="main__clothes">
      <p className="main__description">
        Algunas de las piezas que he restaurado y tienen un nuevo hogar
      </p>
      <section className="main__cards">
        {cards
          .filter((card) => card.private === false)
          .map((card) => (
            <ItemCard
              key={card._id}
              _id={card._id}
              name={card.name}
              image={card.link}
            />
          ))}
      </section>
    </main>
  );
}

export default Main;
