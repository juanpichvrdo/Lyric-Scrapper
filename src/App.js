import React, { Component } from "react";

import Header from "./components/Header";
import Search from "./components/Search";

import "./App.css";

class App extends Component {
  state = {
    artistInput: "",
    songInput: "",
    songLyrics: "",
    error: false
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSong = async e => {
    e.preventDefault();
    const { artistInput, songInput } = this.state;

    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`
      );
      let song = await response.json();

      this.setState({ songLyrics: song.lyrics });
      this.setState({ error: false });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Search
          onInputChange={this.onInputChange}
          searchSong={this.searchSong}
        />
        <div className="song-lyrics">{this.state.songLyrics}</div>
        {this.state.error && <p>Couldn't find lyrics :/</p>}
      </div>
    );
  }
}

export default App;
