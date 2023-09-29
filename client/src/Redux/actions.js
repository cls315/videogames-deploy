import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_DB = "GET_VIDEOGAMES_DB";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_GENRES = "GET_GENRES";
export const POST_VIDEOGAMES = "POST_VIDEOGAMES";
export const ORDER_CARDS = "ORDER_CARDS";
export const ORDER_RATING = "ORDER_RATING";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_ORIGIN = "FILTER_ORIGIN";

export const getVideogames = () => {
  return async (dispatch) => {
    const response = await axios(`/videogames`);
    console.log(response);
    return dispatch({ type: GET_VIDEOGAMES, payload: response.data });
  };
};

export const getVideogamesDb = () => {
  return async (dispatch) => {
    const response = await axios(`/videogames/created`);
    return dispatch({
      type: GET_VIDEOGAMES_DB,
      payload: response.data,
    });
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(`/videogames?name=${name}`);
      return dispatch({ type: GET_BY_NAME, payload: response.data });
    } catch (error) {
      alert("No se encontraron videojuegos con ese nombre");
    }
  };
};
export const getById = (id) => {
  return async (dispatch) => {
    const response = await axios(`/videogames/${id}`);
    return dispatch({ type: GET_BY_ID, payload: response.data });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    const response = await axios(`/genres`);
    return dispatch({ type: GET_GENRES, payload: response.data });
  };
};

export const postVideogames = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`/videogames`, data);
    return dispatch({ type: POST_VIDEOGAMES, payload: response.data });
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};

export const orderRating = (order) => {
  return {
    type: ORDER_RATING,
    payload: order,
  };
};

export const filterGenres = (payload) => {
  console.log(payload);
  return {
    type: FILTER_GENRES,
    payload: payload,
  };
};

export const filterOrigin = (origin) => {
  console.log(origin);
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  };
};
