import React from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../utils/api/index";
import DeckForm from "./DeckForm";

function CreateNewDeck() {
  const history = useHistory();

  function handleSubmit(deck) {
    createDeck(deck)
      .then((saveDeck) => history.push(`/decks/${saveDeck.id}`))
      .catch((error) => console.log(error));
  }

  function cancel() {
    history.goBack();
  }

  return (
    <>
      <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div className="card border border-dark p-4">
        <h2> Create Deck</h2>
        <DeckForm onCancel={cancel} onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default CreateNewDeck;
