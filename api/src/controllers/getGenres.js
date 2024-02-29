const axios = require("axios");
const { Genre } = require("../db");

const getGenres = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/genres?key=1d9e4c6e87dc485a8de049e1607e0765`
  );

  const genres = response.data.results.map((data) => {
    const { id, name } = data;
    return { id, name };
  });

  for (let i = 0; i < genres.length; i++) {
    await Genre.findOrCreate({
      where: { id: genres[i].id },
      defaults: { name: genres[i].name },
    });
  }

  return genres;
};

module.exports = getGenres;
