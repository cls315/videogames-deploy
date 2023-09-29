const postVideogames = require("../controllers/postVideogames");

const postVideogamesHndls = async (req, res) => {
  const {
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = req.body;

  try {
    const newGame = await postVideogames(
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genres
    );

    res.status(200).json(newGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postVideogamesHndls;
