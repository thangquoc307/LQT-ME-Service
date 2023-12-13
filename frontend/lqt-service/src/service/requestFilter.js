import axios, {request} from "axios";

export const requestFilter = () => {
    axios.interceptors.request.use(request => {
        const token = localStorage.getItem("token");
        if (token) {
            request.headers.Authorization = `Bearer ${token}`
            request.headers["Content-Type"] = "application/json"
        }
        return request;
    })
}