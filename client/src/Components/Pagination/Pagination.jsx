import { useState } from "react";
import style from "./Pagination.module.css";

const Paginate = ({ currentPage, setCurrentPage, totalPages }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.pagination}>
      <button
        disabled={input === 1}
        onClick={previousPage}
        className={`${style.pageButton} ${input === 1 ? style.disabled : ""}`}
      >
        PREVIOUS
      </button>
      <input
        name="page"
        autoComplete="off"
        value={input}
        className={style.pageInput}
      />
      <span> OF </span>
      <span> {totalPages}</span>
      <button
        disabled={input === totalPages}
        onClick={nextPage}
        className={`${style.pageButton} ${
          input === totalPages ? style.disabled : ""
        }`}
      >
        NEXT
      </button>
    </div>
  );
};

export default Paginate;
