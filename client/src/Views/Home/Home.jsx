import style from "./Home.module.css";
import Cards from "../../Components/Cards/Cards";
//import SearchBar from "../../Components/SearchBar/SearchBar";
import Filters from "../../Components/Filters/Filters";
import Pagination from "../../Components/Pagination/Pagination";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenres, getVideogames } from "../../Redux/actions";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const genres = useSelector((state) => state.genres);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const totalVideogames = videogames.length;
  const totalPages = Math.ceil(totalVideogames / perPage);
  const numberStart = (currentPage - 1) * perPage;
  const numberEnd = (currentPage - 1) * perPage + perPage;
  const slicePage =
    videogames.length > 0 ? videogames.slice(numberStart, numberEnd) : [];

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={style.home}>
      <div className={style.leftSidebar}>
        <Filters genres={genres} />
      </div>
      {isLoading ? (
        <div className={style.loading}>
          <Loading />
        </div>
      ) : (
        <div className={style.content}>
          <div className={style.cards}>
            <Cards videogames={videogames} slicePage={slicePage} />
          </div>
          <div className={style.pag}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
