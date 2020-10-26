import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;