import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "./leads/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
