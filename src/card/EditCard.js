import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const [card, setCard] = useState(null);
  const history = useHistory();
  const { cardId, deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function handleSubmit(editedCard) {
    updateCard(editedCard)
      .then(() => history.push(`/decks/${deckId}`))
      .catch((error) => console.log(error));
  }

  function cancel() {
    history.goBack();
  }

  const editForm =
    deck.id && card ? (
      <CardForm
        handleSubmit={handleSubmit}
        onCancel={cancel}
        initialData={card}
      />
    ) : (
      <p>Loading</p>
    );

  if (!card) {
    return null;
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
          <li className="breadcrumb-item active">Edit Card</li>
        </ol>
      </nav>
      <div className="card border border-primary p-4">
        <h2>Edit Card</h2>
        {editForm}
      </div>
    </>
  );
}

export default EditCard;
