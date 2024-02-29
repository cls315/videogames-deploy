import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Nav from "./Components/Nav/Nav";
import Form from "./Views/Form/Form";
import LandingPage from "./Views/LandingPage/LandingPage";
import axios from "axios";
axios.defaults.baseURL = "https://videogames-deploy-fwsu.onrender.com";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <div>
        {pathname !== "/" &&
          !pathname.startsWith("/detail/") &&
          !pathname.startsWith("/form") && <Nav />}
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
