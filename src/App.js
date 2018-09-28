import React, { Component } from "react";
import Loader from "react-loader";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SongLyrics from "./components/SongLyrics/SongLyrics";

import "./App.css";

class App extends Component {
  state = {
    artistInput: "",
    songInput: "",
    songLyrics: "",
    error: false,
    loaded: true
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSong = async e => {
    e.preventDefault();
    this.setState({ loaded: false });

    const { artistInput, songInput } = this.state;

    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`
      );
      let song = await response.json();

      this.setState({ songLyrics: song.lyrics });

      if (!!this.state.songLyrics) {
        this.setState({ error: false, loaded: true });
      } else {
        this.setState({ error: true, loaded: true });
      }
    } catch (e) {
      this.setState({ error: true, loaded: true });
    }
  };

  render() {
    const { artistInput, songInput, songLyrics, loaded } = this.state;

    return (
      <div>
        <Header />
        <Search
          onInputChange={this.onInputChange}
          searchSong={this.searchSong}
        />
        <Loader loaded={loaded}>
          {songLyrics && (
            <SongLyrics
              artist={artistInput}
              song={songInput}
              lyrics={songLyrics}
            />
          )}
        </Loader>

        <Loader loaded={loaded}>
          {this.state.error && (
            <p style={{ fontSize: "2rem" }}>Couldn't find lyrics :/</p>
          )}
        </Loader>

        <p style={{ fontSize: "1.6rem", marginTop: "10rem" }}>
          coded by Juan D.
        </p>
      </div>
    );
  }
}

export default App;
