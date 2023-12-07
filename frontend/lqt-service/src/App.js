import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Mainpage from "./components/mainpage/Mainpage";
import ManagerPage from "./components/managePage/ManagerPage";

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
            <Route path="/admin" element={<ManagerPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
