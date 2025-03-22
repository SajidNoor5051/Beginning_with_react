import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { fetchPopularMovies, searchMovies } from "../APIs/api";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const popularMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const movies = await fetchPopularMovies();
        setMovies(movies);
        console.log("Movies fetched successfully!");
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies!");
      } finally {
        setLoading(false);
      }
    };
    popularMovies();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm === "") {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
      console.log("Search completed successfully!");
    } catch (error) {
      console.error("Search error:", error);
      setError("Failed to search movies!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full p-5 bg-black text-white">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center mb-8 gap-2 w-full px-5"
        >
          <input
            className="w-72 p-2 border-2 border-blue-500 rounded bg-gray-800 text-white focus:outline-none focus:border-blue-700"
            type="text"
            placeholder="Search for a movie"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Loading movies...</div>}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-5">
          {movies.length > 0
            ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            : !loading && !error && <p>No movies found.</p>}
        </div>
      </div>
    </>
  );
};

export default Homepage;
