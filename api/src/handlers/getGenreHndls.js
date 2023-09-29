const getGenres = require("../controllers/getGenres");

const getGenresHandler = async (req, res) => {
  try {
    const getGenresAll = await getGenres();
    res.status(200).json(getGenresAll);
  } catch (error) {
    res.status(400).json({ error: "No hay generos de videojuegos " });
  }
};

module.exports = getGenresHandler;
