const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getVideogames = async () => {
  let results = [];
  for (let i = 1; i <= 3; i++)
    results = [
      ...results,
      ...(
        await axios.get(
          `https://api.rawg.io/api/games?page=${i}&page_size=40&key=1d9e4c6e87dc485a8de049e1607e0765`
        )
      ).data.results,
    ];

  const allVideogamesApi = results.map((v) => {
    return {
      id: v.id,
      name: v.name,
      background_image: v.background_image,
      description: v.description,
      rating: v.rating,
      platforms: v.platforms.map((p) => p.platform.name),
      released: v.released,
      genres: v.genres.map((g) => g.name),
    };
  });

  const videogamesDb = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const infoVideogame = allVideogamesApi.concat(videogamesDb);

  const allVideogames = infoVideogame.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      platforms: videogame.platforms,
      genres: videogame.genres || videogame.Genre.map((g) => g.name),
    };
  });

  if (allVideogames.length === 0) {
    return "No hay videojuegos en este momento";
  }
  return allVideogames;
};

module.exports = getVideogames;
