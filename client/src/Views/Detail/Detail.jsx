import Nav from "../../Components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../../Redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  console.log(detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      <div className={style.detailGoHome}>
        <Link to={`/home`} className={style.goBackLink}>
          Volver
        </Link>
      </div>
      <div className={style.detailContainer}>
        <h1 className={style.detailName}>{detail.name}</h1>
        <h3 className={style.detailId}>ID: {detail.id}</h3>
        <div className={style.detailContent}>
          <div className={style.detailInfo}>
            <h3 className={style.detailRating}>Rating: {detail.rating}</h3>
            <h3 className={style.detailReleased}>
              Lanzamiento: {detail.released}
            </h3>

            <div className={style.detailPlatforms}>
              <p>
                <h3>Plataformas: </h3>
                {detail.platforms
                  ?.map((p) => (p.name ? p.name : p))
                  .join(",  ")}
              </p>
            </div>
          </div>
          <div className={style.detailHeader}>
            <img
              src={detail.background_image}
              alt=""
              className={style.detailImage}
            />
          </div>
        </div>
        <hr />
        <div className={style.detailDescription}>
          <p>
            {detail.description
              ? detail.description
                  .split("<p>")
                  .join("")
                  .split("<br />")
                  .join("")
                  .split("</p>")
                  .join("")
              : ""}
          </p>
          <div className={style.detailGenres}>
            <p>
              <h3>Generos: </h3>
              {detail.genres?.map((g) => (g.name ? g.name : g)).join(",  ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
