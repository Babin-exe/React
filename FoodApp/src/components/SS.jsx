const SearchSection = ({ onTopRatedClick, onShowAllClick }) => {
  return (
    <div className="p-4 sm:p-6">
      <div className="p-6 rounded-lg shadow-md bg-amber-200 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        <div className="flex-1 w-full">
          <input
            className=" w-full p-3  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            placeholder="Search restaurants..."
          />
        </div>

        <div className="flex flex-wrap gap-3  justify-center md:justify-start md:w-auto">
          <button className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition cursor-pointer w-full sm:w-auto">
            Search
          </button>

          <button
            className="bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-500 transition cursor-pointer  w-full  sm:w-auto"
            onClick={onTopRatedClick}
          >
            Top Rated Restaurant
          </button>

          <button
            className="bg-green-400 text-white px-4 py-2 rounded-2xl hover:bg-green-500 transition cursor-pointer w-full  sm:w-auto "
            onClick={onShowAllClick}
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
