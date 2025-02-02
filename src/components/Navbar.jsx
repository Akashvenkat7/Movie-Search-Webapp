// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <Link to="/" className="text-red-600 text-2xl font-bold">
        MovieSearch
      </Link>
      <div className="flex items-center gap-4">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;