import PropTypes from "prop-types";

const SearchBar = ({ search, setSearch, setSearchParams }) => {
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    setSearchParams({ title: `${event.target.value}` });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Find by title"
        className="rounded-2xl p-3 text-black sm:w-80 lg:w-96 sm:px-4"
        onChange={onChangeHandler}
        value={search}
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchBar;
