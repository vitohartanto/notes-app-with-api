import PropTypes from "prop-types";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const SearchBar = ({ search, setSearch, setSearchParams }) => {
  const { language } = useContext(LanguageContext);
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    setSearchParams({ title: `${event.target.value}` });
  };
  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder={
          language === "en" ? "Find by title" : "Cari berdasarkan judul"
        }
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
