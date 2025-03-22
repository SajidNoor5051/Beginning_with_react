import React, { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const addToFavourites = (movie) => {
    setFavourites((prevFavourites) => {
      const updatedFavourites = [...prevFavourites, movie];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  const removeFromFavourites = (movieId) => {
    const updatedFavourites = favourites.filter(
      (movie) => movie.id !== movieId
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const isFavourited = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourited,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to use the MovieContext
export const useMovieContext = () => {
  return useContext(MovieContext);
};
