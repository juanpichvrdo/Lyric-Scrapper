import React from "react";

const Search = ({ onInputChange, searchSong }) => {
  return (
    <form onSubmit={searchSong}>
      <label htmlFor="artistInput">Artist</label>
      <input
        type="text"
        name="artistInput"
        id="artistInput"
        onChange={onInputChange}
        placeholder="Coldplay"
      />
      <label htmlFor="songInput">Song</label>
      <input
        type="text"
        name="songInput"
        id="songInput"
        onChange={onInputChange}
        placeholder="Viva La Vida"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
