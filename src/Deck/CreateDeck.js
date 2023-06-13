import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";

function CreateDeck({ deckList }) {
  const history = useHistory();
  const initialData = {
    name: "",
    description: "",
  };

  const [createNewDeck, setCreateNewDeck] = useState(initialData);
  const [showForm, setShowForm] = useState(false);

  function handleChange(event) {
    setCreateNewDeck({
      ...createNewDeck,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newDeck = {
      name: createNewDeck.name,
      description: createNewDeck.description,
    };

    try {
      await createDeck(newDeck);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="col-12"
              type="text"
              id="name"
              name="name"
              value={createNewDeck.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              className="col-12"
              id="description"
              name="description"
              value={createNewDeck.description}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-outline-primary mb-3 mt-3 mr-2"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-outline-primary mb-3 mt-3">
            Create Deck
          </button>
        </form>
    </>
  );
}

export default CreateDeck;
