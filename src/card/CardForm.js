import React, { useState } from "react";

function CardForm({ onCancel, handleSubmit, initialData = { front: "", back: "" } }) {
  const [card, setCard] = useState(initialData);

  console.log("initial:", initialData)
  function handleCardChange(event) {
    event.preventDefault();
    setCard((edit) => ({
      ...edit,
      [event.target.name]: event.target.value,
    }));
  }

  function handleFinalSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    handleSubmit(card);
  }

  return (
    <>
      <form onSubmit={handleFinalSubmit} className="card-edit">
        <fieldset>
          <div className="form-group">
            <label htmlFor="front">Front: </label>
            <textarea
              className="form-control"
              id="front"
              name="front"
              type="text"
              value={card.front}
              required={true}
              placeholder="Front of the card"
              onChange={handleCardChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="back">Back: </label>
            <textarea
              className="form-control"
              id="back"
              name="back"
              type="text"
              value={card.back}
              placeholder="Back of the card"
              onChange={handleCardChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-outline-dark ml-2">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default CardForm;
