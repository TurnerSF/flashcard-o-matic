import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import NotEnough from "./NotEnough";
import StudyCards from "./StudyCards";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  if (!deck.cards) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item text-primary">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <div>
          {deck.cards.length >= 3 ? (
            <StudyCards deck={deck} />
          ) : (
            <NotEnough deck={deck} />
          )}
        </div>
      </>
    );
  }
}

export default Study;
