import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function AddCard() {
  const history = useHistory();
  const { deckId } = useParams();
  const initialData = {
    front: "",
    back: "",
  };

  const [addNewCard, setAddNewCard] = useState(initialData);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function fetchDeck(deckId) {
      const data = await readDeck(deckId);
      setDeck(data);
    }
    fetchDeck(deckId);
  }, [deckId]);

  function handleChange(event) {
    event.preventDefault();
    setAddNewCard((card) => ({
      ...card,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      front: addNewCard.front,
      back: addNewCard.back,
    };
    try {
      await createCard(deckId, newCard);
      history.push(`/decks/${deckId}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Add Card</li>
      </ol>
      <form onSubmit={handleSubmit}>
        <h2>{deck.name}: Add Card</h2>
        <div>
          <label htmlFor="front">Front</label>
          <textarea
            className="col-12"
            name="front"
            id="front"
            value={addNewCard.front}
            onChange={handleChange}
          />
          <label htmlFor="back">Back</label>
          <textarea
            className="col-12"
            name="back"
            id="back"
            value={addNewCard.back}
            onChange={handleChange}
          />
        </div>
        <Link className="btn btn-outline-danger mr-2" to={`/decks/${deckId}`}>Cancel</Link>
        <button
          className="btn btn-outline-primary mb-3 mt-3 mr-2"
          type="submit"
        >
          Add Card
        </button>
      </form>
    </>
  );
}

export default AddCard;
