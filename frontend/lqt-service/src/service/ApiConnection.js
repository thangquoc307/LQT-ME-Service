import axios from "axios";

export const getAllRoom = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/all_room");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getAllRoomByLevel = async (level) => {
    try {
        const res = await axios.get("http://localhost:8080/api/levelroom/" + level);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getRequestByMonthYear = async (month, year) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/schedule/${month}/${year}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getRequestHolding = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/request`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteRequest = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/api/request/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getEmployeeList = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/employee`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const confirmSchedule = async (schedule) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/request`, schedule);
        return res;
    } catch (e) {
        console.log(e);
    }
}