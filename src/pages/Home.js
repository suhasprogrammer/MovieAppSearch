import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const API_KEY = "c0337c32";

const Home = () => {
  const [movies, setMovies] = useState([]);

  // calling api on Search click
  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );

      const result = await response.json();

      if (result.Response === "True") {
        setMovies(result.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
