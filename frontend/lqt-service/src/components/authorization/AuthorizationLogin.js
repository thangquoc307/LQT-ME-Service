import "./authorization.css";
import {useNavigate} from "react-router-dom";
export default function AuthorizationLogin() {
    const navigate = useNavigate();
    const logout = async () => {
        await localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <>
            <div className="author"/>
            <p className="author-alert">Bạn đã Login !!!</p>
            <div className="author-button-login">
                <div/>
                <div
                    onClick={logout}
                    className="hover-button borderradius color5 author-button-back">
                    Đăng xuất
                </div>
                <div
                    onClick={() => {navigate("/")}}
                    className="hover-button borderradius color5 author-button-back">
                    Trở lại trang chủ
                </div>
                <div/>
            </div>
        </>
    )
}