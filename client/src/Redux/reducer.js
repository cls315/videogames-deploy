import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_DB,
  GET_BY_NAME,
  GET_BY_ID,
  GET_GENRES,
  POST_VIDEOGAMES,
  ORDER_CARDS,
  ORDER_RATING,
  FILTER_GENRES,
  FILTER_ORIGIN,
} from "./actions";

const initialState = {
  allVideogames: [],
  videogames: [],
  database: [],
  detail: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogames: action.payload,
      };
    case GET_VIDEOGAMES_DB:
      return {
        ...state,
        database: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_BY_ID:
      return { ...state, detail: action.payload };
    case GET_GENRES:
      return { ...state, genres: action.payload };
    case POST_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogames: action.payload,
      };
    case ORDER_CARDS:
      let copy = [...state.videogames];
      let order;
      if (action.payload === "A") {
        order = copy.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (action.payload === "Z") {
        order = copy.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else {
        order = [...state.videogames];
      }
      return {
        ...state,
        videogames: order,
      };
    case ORDER_RATING:
      const orderRating = [...state.videogames].sort((a, b) => {
        if (action.payload === "mayor") {
          return a.rating < b.rating ? 1 : -1;
        } else {
          return a.rating > b.rating ? 1 : -1;
        }
      });
      return {
        ...state,
        videogames: orderRating,
      };

    case FILTER_GENRES:
      const filterGenres = state.allVideogames.filter((g) =>
        g.genres.includes(action.payload)
      );
      return {
        ...state,
        videogames: filterGenres,
      };
    case FILTER_ORIGIN:
      const filterOrigin =
        action.payload === "db"
          ? state.allVideogames.filter((g) => g.id.toString().includes("-"))
          : action.payload === "api"
          ? state.allVideogames.filter((g) => !g.id.toString().includes("-"))
          : [...state.allVideogames];
      return {
        ...state,
        videogames: filterOrigin,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
