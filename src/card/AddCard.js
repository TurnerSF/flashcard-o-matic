import React, { useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function handleSubmit(card) {
    createCard(deckId, card)
      .then(() => history.push(`/decks/${deckId}`))
      .catch((error) => console.log(error));
  }

  function cancel() {
    history.goBack();
  }

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>
      <div className="card-container border border-dark p-3">
        <h2>{deck.name}: Add Card</h2>
        <CardForm handleSubmit={handleSubmit} onCancel={cancel} />
      </div>
    </>
  );
}

export default AddCard;
