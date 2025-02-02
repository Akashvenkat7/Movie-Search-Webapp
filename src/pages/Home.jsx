import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const genres = ["Action", "Romance", "Comedy", "Thriller", "Horror", "Drama", "Sci-Fi"];
const years = Array.from({ length: 30 }, (_, i) => 2023 - i); // Years from 2023 to 1994

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showYearFilter, setShowYearFilter] = useState(false);

  const query = searchParams.get("q") || "action";
  const type = searchParams.get("type") || "";
  const year = searchParams.get("year") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await searchMovies(query, page, type, year);
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
          setError("");
        } else {
          setError(data.Error || "No results found");
        }
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query, page, type, year]);

  const handleGenreClick = (genre) => {
    setSearchParams({ q: genre.toLowerCase(), type: "movie" });
    setPage(1);
  };

  const handleYearFilter = (selectedYear) => {
    setSearchParams({ q: query, type, year: selectedYear });
    setPage(1);
    setShowYearFilter(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen p-4">
      {/* Genre Buttons and Filter Button */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreClick(genre)}
              className="px-4 py-2 bg-black text-white border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors text-sm"
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Year Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowYearFilter(!showYearFilter)}
            className="px-4 py-2 bg-black text-white border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors text-sm"
          >
            Filter by Year
          </button>

          {/* Year Filter Dropdown */}
          {showYearFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-black border border-red-600 rounded-lg shadow-lg z-10">
              <div className="max-h-60 overflow-y-auto">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearFilter(year)}
                    className="w-full px-4 py-2 text-white hover:bg-red-600 transition-colors text-sm text-left"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Movie Grid */}
      {loading ? (
        <div className="text-white text-center">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-center mt-8">{error}</p>}

          {/* Pagination Buttons */}
          {totalResults > 0 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= Math.ceil(totalResults / 10)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;