import "./header.css"
import {useNavigate} from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="color4 header">
            <div className="header-inset color3 boxshadow-inset borderradius">
                <div className="header-logo borderradius cursorPoint"
                     title="back to mainpage"
                     onClick={() => {navigate("/")}}
                />
                <div/>
                <div/>
                <div className="header-button color4 hover-button borderradius boxshadow-outset"
                     onClick={() => {navigate("/login")}}>Đăng nhập</div>
            </div>
        </div>
    )
}