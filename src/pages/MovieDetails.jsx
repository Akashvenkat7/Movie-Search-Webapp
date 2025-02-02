// src/pages/MovieDetails.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-3 bg-black text-white border-2 border-red-600 rounded-lg hover:bg-red-600 transition-colors text-lg"
        >
          ⬅ Back to Home
        </button>

        {/* Movie Details */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Larger Image Section */}
          <div className="flex-[2_1_0%]">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/800x1200?text=No+Poster"}
              alt={movie.Title}
              className="w-full h-[600px] object-cover rounded-lg border-4 border-red-600 shadow-xl"
            />
          </div>

          {/* Enhanced Details Section */}
          <div className="flex-[3_1_0%] text-white space-y-6">
            <h1 className="text-5xl font-bold mb-4">{movie.Title}</h1>
            
            <div className="flex items-center gap-6">
              <p className="text-2xl text-gray-400">{movie.Year}</p>
              <span className="text-xl bg-red-600 px-4 py-2 rounded">
                {movie.Rated}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">IMDb Rating</p>
                <p className="text-3xl">{movie.imdbRating}/10</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">Runtime</p>
                <p className="text-xl">{movie.Runtime}</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">Genre</p>
                <p className="text-xl">{movie.Genre}</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">Director</p>
                <p className="text-xl">{movie.Director}</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">Language</p>
                <p className="text-xl">{movie.Language}</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-red-600">Country</p>
                <p className="text-xl">{movie.Country}</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold text-red-600">Plot Summary</p>
              <p className="text-xl leading-relaxed">{movie.Plot}</p>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold text-red-600">Cast</p>
              <p className="text-xl">{movie.Actors}</p>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold text-red-600">Awards</p>
              <p className="text-xl">{movie.Awards}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;