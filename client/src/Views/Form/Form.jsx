import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, postVideogames } from "../../Redux/actions";
import { validator } from "./validation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const [values, setValues] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    genres: [],
    currentPlatform: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    console.log(value);
    setErrors(validator({ ...values, [property]: value }));
    setValues({ ...values, [property]: value });
  };

  const handleSelectGenres = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validator({ ...values, [property]: value }));
    setValues({
      ...values,
      genres: [...values.genres, event.target.value],
    });
  };

  const platformHandler = (event) => {
    event.preventDefault();

    if (event.target.name) {
      const removePlatform = event.target.name;
      setErrors(
        validator({
          ...values,
          platforms: values.platforms.filter(
            (platform) => platform !== removePlatform
          ),
        })
      );
      setValues({
        ...values,
        platforms: values.platforms.filter(
          (platform) => platform !== removePlatform
        ),
      });
    } else if (values.currentPlatform) {
      const platform = values.currentPlatform;
      setErrors(
        validator({
          ...values,
          platforms: [...values.platforms, platform],
          currentPlatform: "",
        })
      );
      setValues({
        ...values,
        platforms: [...values.platforms, platform],
        currentPlatform: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name === "" ||
      values.background_image === "" ||
      values.rating === 0 ||
      values.released === "" ||
      values.description === "" ||
      values.genres.length === 0 ||
      values.platforms.length === 0
    )
      return alert("You must complete all fields");

    dispatch(postVideogames(values));
    setValues({
      name: "",
      background_image: "",
      description: "",
      platforms: [],
      released: "",
      rating: 0,
      genres: [],
    });
    alert("Videogames has been created");
  };

  return (
    <div>
      <div className={style.navToHome}>
        <Link to={"/home"} className={style.navLink}>
          Volver
        </Link>
      </div>
      <h1 className={style.formTitle}>BIENVENIDO, CREEMOS UN JUEGO!!!</h1>
      <form className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <div className={style.container}>
            <input
              type="text"
              placeholder="Ingrese nombre: "
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.name ? (
              <span className={style.error}>{errors.name1}</span>
            ) : (
              <span className={style.error}>{errors.name2}</span>
            )}
          </div>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="background_image">Imagen:</label>
          <div className={style.container}>
            <input
              type="text"
              placeholder="Ingrese URL imagen: "
              name="background_image"
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.image ? (
              <span className={style.error}>{errors.background_image1}</span>
            ) : (
              <span className={style.error}>{errors.background_image2}</span>
            )}
          </div>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="description">Descripcion:</label>
          <div className={style.container}>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Ingrese descripcion del juego: "
              onChange={(e) => handleChange(e)}
              className={
                errors.description ? style.textareaError : style.textarea
              }
            ></textarea>
            <br />
            {errors.description ? (
              <span className={style.error}>{errors.description1}</span>
            ) : (
              <span className={style.error}>{errors.description2}</span>
            )}
          </div>
        </div>

        <div className={style.formGroup}>
          <label htmlFor="platforms">Plataformas:</label>
          <div className={style.container}>
            <input
              type="text"
              name="currentPlatform"
              value={values.currentPlatform}
              onChange={handleChange}
            />
            <br />
            <button onClick={platformHandler} className={style.buttonPlatforms}>
              Add
            </button>
            <br />
          </div>
        </div>

        <div className={style.formGroup}>
          <label htmlFor="released">Fecha de lanzamiento:</label>
          <div className={style.container}>
            <input
              type="date"
              name="released"
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.released && (
              <span className={style.error}>{errors.released1}</span>
            )}
          </div>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="rating">Rating:</label>
          <div className={style.container}>
            <input
              type="number"
              name="rating"
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.rating ? (
              <span className={style.error}>{errors.rating1}</span>
            ) : (
              <span className={style.error}>{errors.rating2}</span>
            )}
          </div>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="genres">Generos:</label>
          <div className={style.container}>
            <select name="genres" onChange={(e) => handleSelectGenres(e)}>
              {genres.map((g, i) => (
                <option key={i} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
            <br />
            {errors.genres && (
              <span className={style.error}>{errors.genres1}</span>
            )}
          </div>
        </div>
        <div className={style.formGroup}>
          <input
            type="submit"
            onClick={handleSubmit}
            className={style.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
