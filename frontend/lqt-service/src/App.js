import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import BuildingMap from "./components/map/BuildingMap";
import Building from "./components/map/Building";

function App() {
  return (
    <div>
        {/*<ToastContainer position="bottom-left"/>*/}
        {/*<Routes>*/}
        {/*    <Route path="/login" element={<Login/>}></Route>*/}
        {/*    <Route path="*" element={<Header/>}></Route>*/}
        {/*</Routes>*/}
        <Building/>
    </div>
  );
}

export default App;
