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

  function handleNextDeck() {
    if (cardIndex < cards.length - 1) {
      setCardIndex((i) => (i = i + 1));
      setFlip(false);
    } else {
      if (
        window.confirm(
          "Restart cards?\n\nClick 'cancel' to return to the home page"
        )
      ) {
        setCardIndex(0);
        setFlip(false);
        history.push("/");
      }
    }
  }

  if (cards)
    return (
      <>
        <div className="card">
          <div className="card-body border border-primary">
            <h3>Study: {deck.name}</h3>
            <h3 className="">
              Card {cardIndex + 1} of {cards.length}
            </h3>
            <h3 className="">
              {" "}
              {flip ? cards[cardIndex].back : cards[cardIndex].front}{" "}
            </h3>
            <button
              className="btn btn-outline-dark btn-lg mt-5"
              onClick={handleCardFlip}
            >
              Flip
            </button>
            {flip ? (
              <button
                className="btn btn-outline-primary btn-lg mt-5 ml-3 "
                onClick={() => handleNextDeck()}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  else {
    return <p>Loading...</p>;
  }
}

export default StudyCards;
