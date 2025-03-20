import { useState } from "react";

import Homepage from "./pages/Homepage";
import Favourites from "./pages/Favourites";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
