import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../deck/ListDecks";
import { Route, Switch } from "react-router-dom";
import CreateDeck from "../deck/CreateNewDeck";
import ShowDeck from "../deck/ShowDeck";
import AddCard from "../card/AddCard";

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
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId">
            <ShowDeck />
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
