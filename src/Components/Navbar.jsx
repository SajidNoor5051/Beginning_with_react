import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a2e] h-20 flex justify-between items-center px-12 shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold no-underline tracking-wide hover:text-[#ff4c29] transition-all duration-300"
        >
          Movie Website
        </Link>
      </div>

      <div className="flex gap-5">
        <Link
          to="/"
          className="text-white no-underline text-lg py-2 px-4 rounded hover:bg-white/10 hover:text-[#ff4c29] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className="text-white no-underline text-lg py-2 px-4 rounded hover:bg-white/10 hover:text-[#ff4c29] transition-all duration-300 mr-left"
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
