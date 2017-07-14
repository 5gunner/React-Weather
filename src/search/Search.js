import React, { Component } from "react";
import { SearchField } from "../search-field";
import { Display } from "../display";

export class Search extends Component {
  render() {
    return (
      <div>
        <SearchField />
        <Display />
      </div>
    );
  }
}

export default Search;
