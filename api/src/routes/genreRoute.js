const { Router } = require("express");

const getGenresHandler = require("../handlers/getGenreHndls");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;
