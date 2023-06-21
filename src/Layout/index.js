import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../deck/ListDecks";
import { Route, Switch } from "react-router-dom";
import CreateDeck from "../deck/CreateNewDeck";
import ShowDeck from "../deck/ShowDeck";
import AddCard from "../card/AddCard";
import EditDeck from "../deck/EditDeck";
import EditCard from "../card/EditCard"
import Study from "../study/Study";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/" exact>
            <ListDecks />
          </Route>
          <Route path="/decks/new" exact>
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new" exact>
            <AddCard />
          </Route>
          <Route path="/decks/:deckId" exact>
            <ShowDeck />
          </Route>
          <Route path="/decks/:deckId/edit" exact>
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
