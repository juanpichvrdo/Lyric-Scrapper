import React, { Component } from "react";

import Header from "./components/Header";
import Search from "./components/Search";

import "./App.css";

class App extends Component {
  state = {
    artistInput: "",
    songInput: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSong = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <Search
          onInputChange={this.onInputChange}
          searchSong={this.searchSong}
        />
      </div>
    );
  }
}

export default App;
