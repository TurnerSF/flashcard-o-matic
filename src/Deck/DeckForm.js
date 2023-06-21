import React, { useState } from "react";

function DeckForm ({
    onCancel,
    onSubmit, 
    initialData = { name: "", description: ""},
}) {
    const [deck, setDeck] = useState(initialData);

    function handleDeckChange(event) {
        event.preventDefault();
        setDeck((edit) => ({
            ...edit,
            [event.target.name]: event.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        onSubmit(deck);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="deck-edit">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            type="text"
                            value={deck.name}
                            required={true}
                            placeholder="Name of the deck"
                            onChange={handleDeckChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            row="4"
                            value={deck.description}
                            required={true}
                            placeholder="Brief description of the deck"
                            onChange={handleDeckChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary mr-2"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                </fieldset>
            </form>
        </>
        
    )
}

export default DeckForm;