const axios = require("axios");
const { Videogame, Genre } = require("../db");

//llamando datos de BD

const getVideogamesById = async (id) => {
  if (id.length === 36) {
    const dbGames = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return dbGames;
  } else {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=1e716d59a9c241a2b6c06cf3bf0c8206`
    );
    const apiGames = {
      id: data.id,
      name: data.name,
      description: data.description,
      platforms: data.platforms.map((p) => ({
        id: p.platform.id,
        name: p.platform.name,
      })),
      background_image: data.background_image,
      released: data.released,
      rating: data.rating,
      genres: data.genres.map((gen) => gen.name),
    };
    return apiGames;
  }
};

module.exports = getVideogamesById;
