import React, { Component } from "react";
import { connect } from "react-redux";
import { SaveButton } from "../save-button";

export class Display extends Component {
  secondsToHms(d) {
    let date = new Date(d * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();

    return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
  }

  render() {
    if (this.props.weatherData.country) {
      let weatherData = this.props.weatherData;
      return (
        <main className="weather-wrapper container-fluid">
          <div className="weather-header">
            <h3>
              <i className="wi wi-day-lightning" />
              <span>
                {weatherData.weather[0]["main"]}
              </span>
            </h3>
              <h1>
                {weatherData.main.temp}
                <span>&#x2103;</span>
              </h1>
            <h3>
              {weatherData.name}, {weatherData.country}
            </h3>
          </div>
          <ul className="list-group">
            <li className="list-group-item text-capitalize">
              max temp.<span className="pull-right highlighted">
                <kbd>
                  {weatherData.main.temp}
                </kbd>
              </span>
            </li>
            <li className="list-group-item text-capitalize">
              sunrise<span className="pull-right highlighted">
                <kbd>
                  {this.secondsToHms(weatherData.sys["sunrise"])}
                </kbd>
              </span>
            </li>
            <li className="list-group-item text-capitalize">
              sunset<span className="pull-right highlighted">
                <kbd>
                  {this.secondsToHms(weatherData.sys["sunrise"])}
                </kbd>
              </span>
            </li>
          </ul>
          <SaveButton place={weatherData.name} />
        </main>
      );
    } else {
      return (
        <main className="loader-wrapper">
          <i className="fa fa-spinner loader" />
          <p className="text-center small text-uppercase">locating</p>
        </main>
      );
    }
  }
}

function matchStateToProps(state) {
  return {
    weatherData: state.WeatherData
  };
}

export default connect(matchStateToProps)(Display);
