import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import BuildingMap from "./components/map/BuildingMap";
import Building from "./components/map/Building";
import Mainpage from "./components/mainpage/Mainpage";

function App() {
  return (
    <div>
        <ToastContainer position="bottom-left"/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Header/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Mainpage/>}/>

        </Routes>
        {/*<Building/>*/}
    </div>
  );
}

export default App;
