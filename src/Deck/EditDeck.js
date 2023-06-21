import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm"

function EditDeck() {
  const initialData = {
    name: "",
    description: "",
  };
  const [deck, setDeck] = useState(initialData);
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck)
  }, [deckId]);
  
  function handleSubmit(editedDeck) {
    updateDeck(editedDeck)
      .then((saveDeck) => history.push(`/decks/${saveDeck.id}`) )
      .catch((error) => console.log(error))
  }

  function cancel() {
    history.goBack();
  }

  const editForm = deck.id ? (
    <DeckForm 
      onCancel={cancel}
      onSubmit={handleSubmit}
      initialData={deck}
    />
  ) : (
    <p>Loading...</p>
  );
  

  return (
    <>
      <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Edit Deck</li>
        </ol>
      </nav>

      <h2>
        Edit Deck: {deck.name}
      </h2>
      {editForm}
    </>
  )
}

export default EditDeck;
