import React from "react";
import "./SongLyrics.css";

const SongLyrics = ({ artist, song, lyrics }) => {
  return (
    <div className="song-lyrics">
      <h2 className="artist">{artist}</h2>
      <h3 className="song-name">{song}</h3>
      <div className="song">{lyrics}</div>
    </div>
  );
};

export default SongLyrics;
