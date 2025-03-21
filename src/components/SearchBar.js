import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "80%" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
