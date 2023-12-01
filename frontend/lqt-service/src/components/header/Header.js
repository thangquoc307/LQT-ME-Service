import "./header.css"
import {useNavigate} from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header color3 borderradius boxshadow-inset">
            <div className="header-logo borderradius cursorPoint" title="back to mainpage"></div>
            <div/>
            <div/>
            <div className="header-button color4 hover-button borderradius boxshadow-outset"
            onClick={() => {navigate("/login")}}>Đăng nhập</div>
        </div>
    )
}