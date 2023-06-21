import React from "react";
import { useParams, Link } from "react-router-dom";

function NotEnough({ deck }) {
  const { deckId } = useParams();
  const cards = deck.cards;

  return (
    <>
      <div className="card p-3 border border-dark">
        <div>
          <h3 className="card-container">Study: {deck.name}</h3>
          <h2 className="mt-3">Not enough cards</h2>
          <h4 className=" mt-2 ">
            You need 3 cards to study. there are only {cards.length} cards in
            this deck. Add more cards to study.
          </h4>
        </div>
        <div>
          <Link
            to={`/decks/${deckId}/cards/new`}
            className="btn btn-outline-dark mt-2"
          >
            Add Card
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotEnough;
