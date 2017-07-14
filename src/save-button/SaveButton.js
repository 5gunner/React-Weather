import React, { Component } from "react";
import { connect } from "react-redux";

export class SaveButton extends Component {
  savePlace(place, country) {
    if (!localStorage["names"]) {
      let names = [];
      names[0] = {place, country};
      localStorage.setItem("names", JSON.stringify(names));
    } else if (localStorage["names"] && !localStorage["names"].includes(place)) {
      let names = JSON.parse(localStorage["names"]);
      let length = names.length;
      names[length] = {place, country};
      localStorage.setItem("names", JSON.stringify(names));
    } else if (localStorage["names"] && localStorage["names"].includes(place)) {
      return;
    }
  }

  render() {
    return (
      <button
        onClick={() => this.savePlace(this.props.weatherData.name, this.props.weatherData.country)}
        className="btn bg-info btn-block text-white text-uppercase save-button"
      >
        Save
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.WeatherData
  };
}

export default connect(mapStateToProps)(SaveButton);
