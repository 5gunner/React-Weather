import React, { Component } from "react";
import { SearchField } from "../search-field";
import { Display } from "../display";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export class Search extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
              transitionName="slideIn"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}
              transitionAppearTimeout={300}
              component="div"
            >
        <SearchField />
        <Display />
      </ReactCSSTransitionGroup>
    );
  }
}

export default Search;
