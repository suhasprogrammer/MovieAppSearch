import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log("checking movie", movie);

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "100px", height: "150px" }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
