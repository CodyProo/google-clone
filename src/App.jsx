import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import GoogleVoice from "./pages/GoogleVoice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/google" component={GoogleVoice} />
      </Switch>
    </Router>
  );
};

export default App;
