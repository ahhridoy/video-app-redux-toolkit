import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img class="h-10" src="/assets/lws.svg" alt="Learn with Sumit" />
        </Link>
        {/* search bar */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
