import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

let led = () => {
  return <h1>led Page</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/led" component={led} />
    </Switch>
  );
}

export default App;
