import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { fetchWeather } from "../shared";


export class Saved extends Component {

  handleFormSubmit = place => {
    console.log(place);
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

  listSaves() {
    return JSON.parse(localStorage["names"]).map((ele, i) => {
      return (
        <li className="list-group-item" key={i}>
          <NavLink to={"/"} onClick={() => this.handleFormSubmit((ele.place + ", " + ele.country))}>
            {ele.place}, {ele.country}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    if (localStorage["names"]) {
      return (
        <div className="container-fluid">
          <ul className="list-group">
            {this.listSaves()}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <ul className="list-group">
            <li className="list-group-item">No saves found.</li>
          </ul>
        </div>
      );
    }
  }
}

export default Saved;
