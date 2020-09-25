import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import component
import Navbar from "./components/Navbar";

export default function MyRouter() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Navbar}></Route>
      </Router>
    </div>
  );
}
