const getVideogamesById = require("../controllers/getVideogamesById");

const getVideogamesByIdHndls = async (req, res) => {
  const { id } = req.params;

  try {
    const getVideogames = await getVideogamesById(id);

    res.status(200).json(getVideogames);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogamesByIdHndls;
