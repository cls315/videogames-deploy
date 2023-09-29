const { Videogame } = require("../db");

const postVideogames = async (
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres
) => {
  const newGame = await Videogame.create({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  });

  newGame.addGenres(genres);

  return newGame;
};

module.exports = postVideogames;
