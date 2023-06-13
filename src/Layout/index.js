import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "../Deck/ListDecks"
import {Route} from "react-router-dom"

function Layout() {

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <ListDecks />
        <Route path="*">
          <NotFound />
        </Route>
      </div>
    </>
  );
}

export default Layout;
