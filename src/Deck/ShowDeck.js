import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck, deleteCard } from "../utils/api/index";

function ShowDeck() {
  const [viewDeck, setViewDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchDeck(deckId) {
      const data = await readDeck(deckId);
      setViewDeck(data);
    }
    fetchDeck(deckId);
  }, [deckId]);

  async function handleDelete(cardId) {
    if (window.confirm("Are you sure you want to delete this card")) {
      try {
        await deleteCard(cardId);
        setViewDeck((deck) => ({
          ...deck,
          cards: deck.cards.filter((card) => card.id !== cardId),
        }));
      } catch (e) {
        console.log(e);
      }
    }
  }

  const cards = viewDeck.cards;

  if (viewDeck.id) {
    return (
      <>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{viewDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active">
                View deck
            </li>
          </ol>
          <h1 className="mb-4">{viewDeck.name}</h1>
          <h5>{viewDeck.description}</h5>
          <div className="mt-4 mb-4">
            <Link
              to={`/decks/${deckId}/study`}
              className="btn btn-outline-primary"
            >
              Study
            </Link>
            <Link
              to={`/decks/${deckId}/cards/new`}
              className="btn btn-outline-primary ml-2"
            >
              Add Card
            </Link>
          </div>
          <div className="card-container">
            <h1>Cards</h1>
            {cards.map((card) => (
              <div key={card.id} className="card border border-primary mb-5 p-4">
                <div className="card-title pl-4 pt-2">
                  <h3>{card.front}</h3>
                  <div className="card-body pl-1 pb-1 pt-2">
                    <h5>{card.back}</h5>
                  </div>
                </div>
                <div className="card-footer pb-3">
                  <Link
                    to={`/decks/${deckId}/cards/${card.id}/edit`}
                    className="btn btn-outline-dark ml-1 mt-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-outline-danger float-right mt-2"
                    onClick={() => handleDelete(card.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  return <h3>Page is Loading</h3>;
}

export default ShowDeck;
