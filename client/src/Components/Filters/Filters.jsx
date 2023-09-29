import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import {
  orderCards,
  orderRating,
  filterGenres,
  getVideogames,
  filterOrigin,
} from "../../Redux/actions";

const Filters = ({ genres }) => {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    const order = e.target.value;
    dispatch(orderCards(order));
  };

  const handleOrderRating = (e) => {
    const order = e.target.value;
    dispatch(orderRating(order));
  };

  const handleFilterGenres = (e) => {
    e.preventDefault();
    dispatch(filterGenres(e.target.value));
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
  };

  const handleReset = () => {
    dispatch(getVideogames());
  };

  return (
    <div className="leftSidebar">
      <div className="sidebarContent">
        <div className={style.contenedor}>
          <h2>Filtros</h2>
          <hr />
          <div className={style.filterGroup}>
            <label>Ordenar por:</label>
            <select onChange={handleOrder}>
              <option value="A">A...Z</option>
              <option value="Z">Z...A</option>
            </select>
          </div>
          <div className={style.filterGroup}>
            <label>Rating:</label>
            <select onChange={handleOrderRating}>
              <option value="mayor">Mayor Rating</option>
              <option value="menor">Menor Rating</option>
            </select>
          </div>
          <div className={style.filterGroup}>
            <label>Filtrar por género:</label>
            <select name="filter" id="" onChange={handleFilterGenres}>
              <option value="genres">Selecciona un género</option>
              {genres.map((g) => (
                <option key={g.id} value={g.name}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.filterGroup}>
            <label>Origen:</label>
            <select onChange={handleFilterOrigin}>
              <option value="api">Juegos API</option>
              <option value="db">Juegos DB</option>
            </select>
          </div>
          <button className={style.resetButton} onClick={handleReset}>
            Reiniciar Filtros
          </button>
        </div>
      </div>
      <div className={style.containerLog}></div>
      <div className={style.log}>
        <a href="https://github.com/cls315">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className={style.imgLog}
          />
        </a>

        <a href="https://www.linkedin.com/in/camila-sayavedra-15a19625a/">
          <img
            src="https://w7.pngwing.com/pngs/1024/30/png-transparent-computer-icons-logo-linkedin-logopsd-source-files-angle-text-rectangle.png"
            alt=""
            className={style.imgLog}
          />
        </a>
      </div>
    </div>
  );
};

export default Filters;
