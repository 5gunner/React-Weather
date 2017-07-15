import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { fetchWeather } from "../shared";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export class Saved extends Component {
  constructor() {
    super();
    this.state = {
      places: JSON.parse(localStorage["names"]),
      countPlaces: JSON.parse(localStorage["names"]).length
    };
  }

  handleFormSubmit = place => {
    if (place.length > 0) {
      geocodeByAddress(place)
        .then(results => getLatLng(results[0]))
        .then(position => {
          console.log(position.lat, position.lng);
          fetchWeather(position.lat, position.lng);
        })
        .catch(error => console.error("Error", error));
    }
  };

  handleRemoveItem(i) {
    let localStoragePlaces = JSON.parse(localStorage["names"]);
    let updatedPlaces = localStoragePlaces.filter((ele, index) => i !== index);
    localStorage.setItem("names", JSON.stringify(updatedPlaces));

    this.setState({
      places: updatedPlaces,
      countPlaces: JSON.parse(localStorage["names"]).length
    });
  }

  listSaves() {
    return this.state.places.map((ele, i) => {
      return (
        <li className="list-group-item list-places" key={ele.place}>
          <NavLink
            to={"/"}
            onClick={() =>
              this.handleFormSubmit(ele.place + ", " + ele.country)}
          >
            {ele.place}, {ele.country}
          </NavLink>
          <kbd
            onClick={() => this.handleRemoveItem(i)}
            className="btn btn-default btn-xs pull-right remove-place"
          >
            remove
          </kbd>
        </li>
      );
    });
  }

  displayNumberOfPlaces() {
    if (this.state.countPlaces === 1) {
      return (
        <p className="text-center text-uppercase small">
          {this.state.countPlaces} place found.
        </p>
      );
    } else {
      return (
        <p className="text-center text-uppercase small">
          {this.state.countPlaces} places found.
        </p>
      );
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="slideIn"
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
        transitionAppearTimeout={300}
        component="div"
        className="container-fluid"
      >
        <ul className="list-group">
          <ReactCSSTransitionGroup
            transitionName="slideOut"
            transitionEnter={false}
            transitionLeaveTimeout={500}
          >
            {this.listSaves()}
          </ReactCSSTransitionGroup>
        </ul>
        {this.displayNumberOfPlaces()}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Saved;
