// src/components/Pagination.jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? 'bg-gray-600' : 'bg-red-600 hover:bg-red-700'
          } text-white`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages ? 'bg-gray-600' : 'bg-red-600 hover:bg-red-700'
          } text-white`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;