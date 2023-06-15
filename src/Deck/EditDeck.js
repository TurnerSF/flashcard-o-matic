import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

function EditDeck() {
  const [deckEdit, setEditDeck] = useState({});
  const history = useHistory();
  const {deckId} = useParams();
  const initialData = {
    name: "",
    description: "",
  };


  function handleDeckChange(event) {
    event.preventDefault()
    setEditDeck((edit) => ({
        ...edit,
        [event.target.name]: event.target.value
    }))
  }
  
  
  return <React.Fragment></React.Fragment>;
}
