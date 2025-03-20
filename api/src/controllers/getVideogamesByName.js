const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const getVideogamesByName = async (name) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
  );

  apiName = response.data.results.slice(0, 15).map((game) => ({
    id: game.id,
    name: game.name,
    background_image: game.background_image,
    genres: game.genres,
  }));

  const dbName = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    limit: 15,
  });

  const allNames = [...dbName, ...apiName];

  if (allNames.length === 0) {
    return [{ message: "No se encontraron resultados" }];
  }

  return allNames;
};

module.exports = getVideogamesByName;
