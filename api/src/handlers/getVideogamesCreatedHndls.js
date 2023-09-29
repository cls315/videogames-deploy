/*const getVideogamesCreated = require("../controllers/getVideogamesCreated");

const getVideogamesCreatedHndls = async (req, res) => {
  try {
    const videogamesDb = await getVideogamesCreated();
    res.status(200).json(videogamesDb);
  } catch (error) {
    res
      .status(400)
      .json({ error: "No hay videojuegos creados en la base de datos" });
  }
};

module.exports = getVideogamesCreatedHndls;*/
