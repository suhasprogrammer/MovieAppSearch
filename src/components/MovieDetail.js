import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "c0337c32";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        const result = await response.json();

        if (result.Response === "True") {
          setMovie(result);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setMovie(null);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
};

export default MovieDetail;
