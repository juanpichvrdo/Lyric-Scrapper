import React from "react";
import "./SongLyrics.css";

const SongLyrics = ({ artist, song, lyrics }) => {
  return (
    <div className="song-lyrics">
      <h2 className="song-name">{song}</h2>
      <h3 className="artist">{artist}</h3>
      <div className="song">{lyrics}</div>
    </div>
  );
};

export default SongLyrics;
