import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ slicePage }) => {
  return (
    <div className={style.container}>
      <div className={style.cads}></div>
      <div className={style.cardsList}>
        {slicePage &&
          slicePage.map((videogame) => (
            <Card videogame={videogame} key={videogame.id} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
