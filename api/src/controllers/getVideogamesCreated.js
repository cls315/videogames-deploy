/*const { Videogame, Genre } = require("../db");

const getVideogamesCreated = async () => {
  const videogamesDb = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return videogamesDb;
};

module.exports = getVideogamesCreated;*/
