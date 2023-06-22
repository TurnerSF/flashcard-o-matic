import React, { useState, useEffect } from "react";
import { Link, useHistory, } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";

function ListDecks() {
  const history = useHistory();
  const [deckList, setDeckList] = useState([]);

  useEffect(() => fetchList(), []);
    async function fetchList() {
      const data = await listDecks();
      setDeckList(data);
    }
  async function handleDelete(deckId) {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await deleteDeck(deckId);
        setDeckList((decks) => decks.filter((deck) => deck.id !== deckId));
        history.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <>
      <div>
        <Link to="/decks/new" className="btn btn-primary mb-3">
          Create Deck
        </Link>
      </div>
      {deckList.map((list) => (
        <div className="card-container" key={list.id}>
          <div className="card mb-4 border border-primary">
            <div className="card-body">
              <h3 className="card-title">
                {list.name}
                <div className="mt-3">{list.cards.length} cards</div>
              </h3>
              <h5 className="card-subtitle mb-2 text-body-secondary mt-3">
                {list.description}
              </h5>
              <Link
                to={`/decks/${list.id}`}
                className="btn btn-outline-dark mt-3"
              >
                View
              </Link>
              <Link
                to={`/decks/${list.id}/study`}
                className="btn btn-outline-dark ml-2 mt-3"
              >
                Study
              </Link>
              <Link
                to={`/decks/${list.id}/edit`}
                className="btn btn-outline-dark mt-3 ml-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-outline-danger mt-3 float-right mr-3"
                onClick={() => handleDelete(list.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListDecks;
