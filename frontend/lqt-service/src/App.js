import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Mainpage from "./components/mainpage/Mainpage";
import ManagerPage from "./components/managePage/ManagerPage";
import {requestFilter} from "./service/requestFilter";
import {HandleAuthor} from "./service/authorization";
import Authorization from "./components/authorization/Authorization";
import CustomerPage from "./components/customerPage/CustomerPage";

function App() {
    requestFilter();
  return (
    <div>
        <ToastContainer position="bottom-left"/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/401" element={<Authorization/>}/>
            <Route path="*" element={<Header/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Mainpage/>}/>
        </Routes>
        <Routes>
            <Route element={
                <HandleAuthor arrayAllowRole={["admin"]}/>}>
                <Route path="/admin" element={<ManagerPage/>}/>
            </Route>
            <Route element={
                <HandleAuthor arrayAllowRole={["customer"]}/>}>
                <Route path="/customer" element={<CustomerPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
