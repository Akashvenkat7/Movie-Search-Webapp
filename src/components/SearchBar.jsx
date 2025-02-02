import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`/?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        name="query"
        placeholder="Search movies..."
        className="p-2 rounded-l-lg bg-white text-black outline-none w-64 focus:ring-2 focus:ring-red-600"
      />
      <button
        type="submit"
        className="bg-red-600 p-2 rounded-r-lg text-white hover:bg-red-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;