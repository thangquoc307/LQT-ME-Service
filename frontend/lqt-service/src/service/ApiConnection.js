import axios from "axios";
import {toast} from "react-toastify";

export const getAllRoom = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/admin/all_room");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getAllRoomByLevel = async (level) => {
    try {
        const res = await axios.get("http://localhost:8080/api/admin/levelroom/" + level);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getRequestByMonthYear = async (month, year) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/schedule/${month}/${year}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getRequestHolding = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/request`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getRequestHoldingByRoom = async (room) => {
    try {

        const res = await axios.get(`http://localhost:8080/api/admin/request/${room}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteRequest = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/api/admin/request/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getEmployeeList = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/employee`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getCustomerList = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/customer`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const confirmSchedule = async (schedule) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/admin/request`, schedule);
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getCustomerById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/customer/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const doneRequest = async (id) => {
    try {
        const res = await axios.patch(`http://localhost:8080/api/admin/request/${id}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getCountOfRequest = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/request/count`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getCountOfRequestByLevel = async (level) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/admin/request/count/${level}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const login = async (account) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/authen/login`, account);
        if (res.status == 200) {
            localStorage.setItem("token", res.data)
        }
        return res;
    } catch (e) {
        console.log(e);
        toast.error("Tài khoảng hoặc mật khẩu không đúng")
    }
}