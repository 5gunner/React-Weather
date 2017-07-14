import React, { Component } from "react";
// import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue"
    };
  }

  render() {
    return (
      <nav className="panel panel-default text-uppercase">
        <div className="container-fluid navigation-wrapper">
          <ul className="nav navbar-nav">
            <li>
              <NavLink exact to={"/"} activeClassName="currentRoute">search</NavLink>
            </li>
            <li>
              <NavLink to={"/saved"} activeClassName="currentRoute">saved</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Navigation;
