import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../Deck/ListDecks";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateDeck from "../Deck/CreateNewDeck";
import ShowDeck from "../Deck/ShowDeck";
import AddCard from "../card/AddCard";
import EditDeck from "../Deck/EditDeck";
import EditCard from "../card/EditCard";
import Study from "../Study/Study";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new" >
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new" >
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/edit" >
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <ShowDeck />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <ListDecks />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default Layout;
