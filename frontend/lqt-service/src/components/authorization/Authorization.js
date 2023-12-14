import "./authorization.css"
import {useNavigate} from "react-router-dom";
export default function Authorization() {
    const navigate = useNavigate();
    return (
        <>
            <div className="author"/>
            <p className="author-alert">Bạn không có quyền truy cập vào đường dẫn này !!!</p>
            <div className="author-button">
                <div/>
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