// src/pages/Favorites.jsx
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-white text-2xl font-bold mb-8">Favorite Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Add favorite movies rendering */}
      </div>
    </div>
  );
};

export default Favorites;