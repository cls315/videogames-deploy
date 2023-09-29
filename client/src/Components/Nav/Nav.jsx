import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to="/form" className={style.navLink}>
        Form
      </Link>
      <Link to="/home" className={style.navLink}>
        Home
      </Link>
      <SearchBar />
    </div>
  );
};

export default Nav;
