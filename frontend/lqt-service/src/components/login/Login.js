import "./login.css"
import {useState} from "react";
import RegistForm from "./RegistForm";
import LoginForm from "./LoginForm";
export default function Login(){
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-table color3 boxshadow-outset borderradius">
            <div className="login-table-logo"></div>
            <div className={`login-table-login cursorPoint ${isLogin ? "color0" : "color3"}`}
            onClick={() => {setIsLogin(true)}}>Đăng nhập</div>
            <div className={`login-table-regist cursorPoint ${!isLogin ? "color0" : "color3"}`}
            onClick={() => {setIsLogin(false)}}>Đăng ký</div>
            <div className="login-table-form color0">
                {
                    isLogin ? <div><LoginForm/></div> : <div><RegistForm/></div>
                }
            </div>
        </div>
    )
}