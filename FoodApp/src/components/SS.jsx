const SearchSection = ({ onTopRatedClick, onShowAllClick }) => {
  return (
    <div className="search">
      <div className="search-in">
        <input className="search-inp" type="text" />
        <button className="search-btn">Search</button>
        <button className="finder" onClick={onTopRatedClick}>
          Top Rated Restaurant
        </button>
        <button onClick={onShowAllClick}>Show All</button>
      </div>
    </div>
  );
};

export default SearchSection;
