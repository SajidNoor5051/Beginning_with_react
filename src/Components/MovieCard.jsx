import React from "react";
import { useMovieContext } from "../Context/movieContext";

const MovieCard = ({ movie }) => {
  const { addToFavourites, removeFromFavourites, isFavourited } =
    useMovieContext();

  function onFavBtnCLick(event) {
    event.preventDefault();
    if (isFavourited(movie.id)) {
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }

  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const suffix = (day) => {
      if (day > 3 && day < 21) return "th"; // Catch all for 11-13
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${suffix(day)} ${month}, ${year}`;
  };

  return (
    <div className="movie-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
      <div className="movie-card__header">
        <img
          className="w-full h-80 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-card__header__overlay absolute top-2 right-2 group">
          <span className="fixed top-15 right-1 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {isFavourited(movie.id)
              ? "Remove from Favorite"
              : "Add to Favorite"}
          </span>

          <button
            className={`fav-btn border-2 border-blue-200 bg-blue-200 text-white-500 rounded-full p-2 hover:bg-blue-300 hover:text-white transition-colors ${
              isFavourited(movie.id) ? "bg-blue-600 hover:bg-blue-700" : ""
            }`}
            onClick={onFavBtnCLick}
          >
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-card__info p-2 flex justify-between items-end relative">
        <div>
          <h2 className="text-white text-lg font-semibold">{movie.title}</h2>
          <h2 className="text-gray-400 text-sm">
            {formatReleaseDate(movie.release_date)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
