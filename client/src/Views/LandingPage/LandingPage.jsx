import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <svg viewBox="0 0 1320 300">
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          videogames
        </text>
      </svg>
      <div className={style.buttonContainer}>
        <Link to="/home" className={style.landingButton}>
          <button className={style.button}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
