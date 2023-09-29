import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loadingCircle}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};

export default Loading;
