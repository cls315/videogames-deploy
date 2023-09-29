const getVideogames = require("../controllers/getVideogames");

const getVideogamesByName = require("../controllers/getVideogamesByName");

const getVideogamesHndls = async (req, res) => {
  const { name } = req.query;
  try {
    const videogames = name
      ? await getVideogamesByName(name)
      : await getVideogames();

    res.status(200).json(videogames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogamesHndls;
