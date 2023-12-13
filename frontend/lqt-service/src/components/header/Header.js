import "./header.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import ModalConfirm from "../modal/ModalConfirm";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";
import {setModalType} from "../../redux/action";
export default function Header() {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [role, setRole] = useState("");
    const [dropDown, setDropDown] = useState(false);
    const useModal = useSelector(state => state.modal);
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    const showmodalLogout = () => {
        setModal(4);
        setDropDown(false);
    }
    const logout = async () => {
        await localStorage.removeItem("token");
        setModal(-1);
        navigate("/");
    }

    const setInformation = () => {
        const data = localStorage.getItem("token");
        if (data){
            const information = jwtDecode(data);
            setAvatar(information.avatar);
            setName(information.name);
            setRole(information.role);
        } else {
            setAvatar("");
            setName("");
            setRole("");
        }
    }
    const page = (link) => {
        navigate(link);
        setDropDown(false);
    }
    useEffect(() => {
        setInformation();
    },[useModal])

    console.log(role)
    return (
        <div className="color4 header">
            <div className="header-inset color3 boxshadow-inset borderradius">
                <div className="header-logo borderradius cursorPoint"
                     title="back to mainpage"
                     onClick={() => {page("/")}}
                />
                <div/>
                {role == "" &&
                    <>
                        <div/>
                        <div className="header-button color4 hover-button borderradius boxshadow-outset"
                             onClick={() => {page("/login")}}>Đăng nhập</div>
                    </>
                }
                {["admin","customer","employee"].includes(role) &&
                    <>
                        <div className="header-button-avatar">
                            <div className="header-button-avatar-item"
                            style={{backgroundImage: `url(${avatar})`}}/>

                        </div>
                        <div className="header-button color4 hover-button borderradius boxshadow-outset"
                             onClick={() => {setDropDown(!dropDown)}}>
                            {name}
                        </div>
                    </>
                }

                {(dropDown && role == "admin") &&
                    <div className="dropdown-list">
                        <div className="hover-button color4 borderradius"
                        onClick={() => {page("/admin")}}>
                            Quản lý
                        </div>
                        <div className="hover-button color4 borderradius"
                        onClick={showmodalLogout}>
                            Đăng xuất
                        </div>
                    </div>
                }

                {(dropDown && role == "customer") &&
                    <div className="dropdown-list">
                        <div className="hover-button color4 borderradius"
                             onClick={() => {page("/customer")}}>
                            Quản lý
                        </div>
                        <div className="hover-button color4 borderradius"
                             onClick={showmodalLogout}>
                            Đăng xuất
                        </div>
                    </div>
                }

            </div>
            {useModal == 4 &&
                <ModalConfirm
                    setUseModal={setModal}
                    content= {`<p>
                                Bạn chắc chắn muốn 
                                <span class="textAlert">đăng xuất ?</span>
                                </p>`}
                    confirmAction={logout}
                />
            }
        </div>
    )
}