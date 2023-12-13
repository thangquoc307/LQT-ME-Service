import {jwtDecode} from "jwt-decode";
import {Navigate, Outlet} from "react-router-dom";

const hasAuthor = (arrayAllowRole, userRole) => {
    for (let i = 0; i < arrayAllowRole.length; i++) {
        if (userRole == arrayAllowRole[i]) {
            return true;
        }
    }
    return false;
}
export const HandleAuthor = ({arrayAllowRole}) => {
    let userRole;
    let token = localStorage.getItem("token");
    if (token) {
        userRole = jwtDecode(token).role;
    }
    return userRole && hasAuthor(arrayAllowRole, userRole) ?
        <Outlet/> : <Navigate to={"/401"}/>
}