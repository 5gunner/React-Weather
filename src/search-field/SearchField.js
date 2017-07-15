import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreWeather } from "../actions";
import { fetchWeather } from "../shared";
import { getCurrentLocationWeather } from "../reducers/WeatherReducer";

export class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address.length > 0) {
      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(position => {
          fetchWeather(position.lat, position.lng);
        })
        .catch(error => console.error("Error", error));
    }
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Search Place..."
    };
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <a
              className="text-center current-location"
              onClick={getCurrentLocationWeather}
            >
              <i className="fa fa-location-arrow" />
              <small>current location</small>
            </a>
            <PlacesAutocomplete
              className="form-control"
              inputProps={inputProps}
            />
            <button type="submit" className="form-control">
              {" "}Search{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      storeWeather: StoreWeather
    },
    dispatch
  );
}

function matchStateToProps(state) {
  return {
    weatherData: state.weatherData
  };
}

export default connect(matchStateToProps, mapDispatchToProps)(SearchField);
