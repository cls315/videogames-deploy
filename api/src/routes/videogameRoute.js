const { Router } = require("express");
const getVideogamesHndls = require("../handlers/getVideogamesHndls");
const getVideogamesByIdHndls = require("../handlers/getVideogameByIdHndls");
const postVideogamesHndls = require("../handlers/postVideogameHndls");
//const getVideogamesCreatedHndls = require("../handlers/getVideogamesCreatedHndls");

const routerVideogame = Router();

routerVideogame.get("/", getVideogamesHndls);
routerVideogame.get("/:id", getVideogamesByIdHndls);
//routerVideogame.get("/created", getVideogamesCreatedHndls);
routerVideogame.post("/", postVideogamesHndls);

module.exports = routerVideogame;
