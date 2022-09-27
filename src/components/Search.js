import React from "react";

function Search( { searchPlant, searchForPlants } ) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchForPlants}
        onChange={searchPlant}
      />
    </div>
  );
}

export default Search;
