import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import component
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default function MyRouter() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Navbar}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Router>
    </div>
  );
}
