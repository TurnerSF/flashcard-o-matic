import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";
import CreateDeck from "./CreateDeck";

function ListDecks() {
  const history = useHistory();
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const data = await listDecks();
      setDeckList(data);
    }
    fetchList();
  }, []);

  async function handleDelete(deckId) {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      try {
        await deleteDeck(deckId);
        setDeckList((decks) => decks.filter((deck) => deck.id !== deckId));
        history.push("/decks");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
        <CreateDeck />
      {deckList &&
        deckList.map((list) => (
          <div className="card" key={list.id}>
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
              <button
                className="btn btn-outline-danger ml-2 mt-3"
                onClick={() => handleDelete(list.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default ListDecks;
