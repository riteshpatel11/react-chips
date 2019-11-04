import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".chips");
      var instances = M.Chips.init(elems, {
        autocompleteOptions: {
          data: {
            Apple: null,
            Bananas: null,
            Grapes: null,
            Mango: null,
            Watermelon: null,
            Oranges: null,
            Raspberries: null,
            Strawberries: null,
            Kiwi: null
          },
          limit: Infinity,
          minLength: 1
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Fruits</h1>
          <div className="chips chips-autocomplete">
            <input placeholder="Enter text"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
