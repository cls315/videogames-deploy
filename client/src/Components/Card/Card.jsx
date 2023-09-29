import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ videogame }) => {
  return (
    <div className={style.card}>
      <img
        src={videogame.background_image}
        alt="Imagen Game"
        className={style.cardImage}
      />
      <Link to={`/detail/${videogame.id}`} className={style.cardLink}>
        <h2 className={style.cardTitle}>{videogame.name}</h2>
      </Link>
      <h3>{videogame.rating}</h3>
      <h4 className={style.cardGenres}>
        Generos:
        {videogame.genres?.map((g) => (g.name ? g.name : g)).join(",  ")}
      </h4>
    </div>
  );
};

export default Card;
