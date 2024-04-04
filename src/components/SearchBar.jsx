import PropTypes from "prop-types";

const SearchBar = ({ search, setSearch, setSearchParams }) => {
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    setSearchParams({ title: `${event.target.value}` });
  };
  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder="Find by title"
        className="rounded-2xl p-3 text-black w-full  sm:px-4 mb-6 border-2"
        onChange={onChangeHandler}
        value={search}
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSearchParams: PropTypes.func,
};

export default SearchBar;
