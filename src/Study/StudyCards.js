import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCards({ deck }) {
  const [flip, setFlip] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const history = useHistory();
  const cards = deck.cards;

  function handleCardFlip() {
    setFlip(!flip);
  }

  function handleNextCard() {
    const isLastCard = cardIndex === cards.length - 1;

    if (isLastCard) {
      const shouldRestart = window.confirm(
        "Restart cards? Click 'cancel' to return to the home page"
      );

      if (shouldRestart) {
        setCardIndex(0);
        setFlip(false);
        history.push("/");
      }
    } else {
      setCardIndex(cardIndex + 1);
      setFlip(false);
    }
  }
  const currentCard = cards[cardIndex];

  if (cards)
    return (
      <div className="card">
        <div className="card-body border border-primary">
          <h3>Study: {deck.name}</h3>
          <h3>
            Card {cardIndex + 1} of {cards.length}
          </h3>
          <h3>{flip ? currentCard.back : currentCard.front}</h3>
          <button
            className="btn btn-outline-dark btn-lg mt-5"
            onClick={handleCardFlip}
          >
            Flip
          </button>
          {flip && (
            <button
              className="btn btn-outline-primary btn-lg mt-5 ml-3"
              onClick={handleNextCard}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
}

export default StudyCards;
