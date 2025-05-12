import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

interface MovieDetail {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Trailer: string | null;
}

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details from OMDb API
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=19a235cd`
        );
        const data = await response.json();

        if (!data.Title) {
          setError("Movie not found.");
          return;
        }

        // Fetch trailer from TMDb API
        const tmdbApiKey = "2ea3fb190d4a2c4bc4a009ef06d696b0";
        const tmdbResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdbApiKey}`
        );
        const tmdbData = await tmdbResponse.json();

        // Find the first YouTube trailer
        const trailer = tmdbData.results.find(
          (video: any) => video.site === "YouTube" && video.type === "Trailer"
        );

        setMovie({
          ...data,
          Trailer: trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null,
        });
      } catch (error) {
        setError("Error fetching movie details.");
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail-container">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h1>
          {movie.Title} <span>({movie.Year})</span>
        </h1>
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

        <p>
          <strong>IMDb Rating:</strong>
          <span> ⭐ </span> {movie.imdbRating}
        </p>
      </div>

      {/* Movie Player Section */}
      {movie.Trailer ? (
        <div className="movie-player">
          <h2>Watch Trailer</h2>
          <iframe
            width="100%"
            height="400"
            src={movie.Trailer}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
};

export default MovieDetail;
