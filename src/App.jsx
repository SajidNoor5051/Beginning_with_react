import { useState } from "react";

import Homepage from "./pages/Homepage";
import Favourites from "./pages/Favourites";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Context/movieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
