import React from "react";
import Main from "./Main";

function Profile({ cards, onCardClick, onCardLike, onCardDelete }) {
  return (
    <Main
      cards={cards}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />
  );
}

export default Profile;
