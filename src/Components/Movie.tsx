import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../movie.css";
import Footer from "./Footer";

// Define the structure of a single movie
interface MovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// Define the API response structure
interface ApiResponse {
  Search?: MovieData[];
  totalResults?: string;
  Response: string;
  Error?: string;
}

const Movie = () => {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);

  // Fetching movies based on user input
  const fetchMovies = async (query: string) => {
    if (!query.trim()) {
      setMovies([]); // Clear movies if input is empty (to avoid fetching random results)
      return;
    }

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=19a235cd`
      );
      const data: ApiResponse = await response.json();

      if (data.Response === "True" && data.Search) {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(" No results found.");
      }
    } catch (error) {
      setError("Please check internet connection.");
      console.error(error);
    }
  };

  // Fetch movies automatically as user types
  useEffect(() => {
    if (search) fetchMovies(search);
    else fetchMovies("Hello");
  }, [search]);

  // Handle "Send" button click (show error only if search is empty)
  const handleSearchClick = () => {
    setIsSearchClicked(true);
    if (!search.trim()) {
      setError(" Please enter a movie name.");
    }
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Movie-Scout</h1>
        </div>
        <div className="input-field">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
            className="styled-input"
          />
          <button className="btn" onClick={handleSearchClick}>
            Send
          </button>
        </div>
      </div>
      <div className="movie">
        <h3>Movies</h3>
        {error && <p className="error-message">{error}</p>}
        <div className="container">
          {movies.map((movie) => (
            <Link
              to={`/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="box"
            >
              <img src={movie.Poster} alt={movie.Title} />
              <div className="detail">
                <h4>
                  {movie.Title} ({movie.Year})
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
