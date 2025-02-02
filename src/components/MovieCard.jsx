import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-black p-4 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
          alt={movie.Title}
          className="w-full h-96 object-cover rounded-lg mb-4 border-2 border-transparent hover:border-red-600"
        />
      </Link>
      <div className="space-y-2">
        <h3 className="text-white text-lg font-bold truncate">{movie.Title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">{movie.Year}</p>
          <span className="text-sm bg-red-600 text-white px-2 py-1 rounded">
            {movie.Type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;