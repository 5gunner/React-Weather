import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./navigation";
import { Route } from "react-router-dom";
import { Search } from "./search";
import { Saved } from "./saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <div className="col-sm-4 col-sm-offset-4 col-xs-12">
            <Navigation />
              <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
