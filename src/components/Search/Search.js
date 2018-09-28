import React from "react";
import "./Search.css";

const Search = ({ onInputChange, searchSong }) => {
  return (
    <form onSubmit={searchSong}>
      <div>
        <label htmlFor="songInput">Song</label>
        <input
          type="text"
          name="songInput"
          id="songInput"
          onChange={onInputChange}
          placeholder="Viva La Vida"
        />
      </div>
      <div>
        <label htmlFor="artistInput">Artist</label>
        <input
          type="text"
          name="artistInput"
          id="artistInput"
          onChange={onInputChange}
          placeholder="Coldplay"
        />
      </div>

      <button>Search</button>
    </form>
  );
};

export default Search;
