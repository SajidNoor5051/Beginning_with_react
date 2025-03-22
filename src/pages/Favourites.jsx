import React from "react";
import { useMovieContext } from "../Context/movieContext";
import MovieCard from "../Components/MovieCard";

const Favourites = () => {
  const { favourites } = useMovieContext();

  return (
    <div className="pt-0 min-h-screen bg-black text-white">
      <div className="p-8">
        <h1 className="text-center my-5">Your Favourites List</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-5">
          {favourites.length > 0 ? (
            favourites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
