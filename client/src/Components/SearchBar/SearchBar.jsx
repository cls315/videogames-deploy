import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(search));
  };
  return (
    <div className={style.searchBar}>
      <input
        type="search"
        className={style.searchInput}
        placeholder="Buscar..."
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className={style.searchButton}
        onClick={handleSubmit}
      >
        <span className={style.searchIcon}>
          <img
            src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-19.jpg"
            alt="logo busqueda"
            className={style.searchIcon}
          />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
