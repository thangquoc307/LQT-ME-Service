import "./employeePage.css";
import {useEffect, useRef, useState} from "react";
import {doneRequestEmployee, getRequestByMonthYearEmployee} from "../../service/ApiConnection";
import {jwtDecode} from "jwt-decode";
import {ScheduleEmployee} from "../schedule/ScheduleEmployee";
import {useSelector} from "react-redux";
import EmployeeBuildingMap from "../employeeMap/EmployeeBuildingMap";
import EmployeeDetailMap from "../employeeMap/EmployeeDetailMap";
import {store} from "../../redux/store";
import {setLevel, setModalType, setRoom} from "../../redux/action";
import PersonalChat from "../chatbox/PersonalChat";
import {getDate, getHourMinute, getOnlyDayMonth, reduceLengthName} from "../../service/formatData";
import ModalConfirm from "../modal/ModalConfirm";
import {toast} from "react-toastify";
export default function EmployeePage(){
    const [schedule, setSchedule] = useState();
    const [today, setToday] = useState(new Date());
    const [offset, setOffset] = useState(0);
    const [arrayDay, setArrayDay] = useState([]);
    const [arrayLevel, setArrayLevel] = useState([]);
    const [arrayRoom, setArrayRoom] = useState([]);
    const [arraySchedule, setArraySchedule] = useState([]);
    const displayTime = useRef();
    const useModal = useSelector(state => state.modal);
    const level = useSelector(state => state.level);
    const employeeId = jwtDecode(localStorage.getItem("token")).sub;
    const [selectDay, setSelectDay] = useState();
    const [selectRequest, setSelectRequest] = useState({id: -1});
    const [contentModal, setContentModal] = useState();
    const [idDone, setIdDone] = useState(-1);
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    const showModal = () => {
        if (selectRequest.requestStatus.id == 1) {
            setContentModal(
                `<p>Xác nhận hoàn thành yêu cầu của khách hàng<br/>
                   <span class="textAlert"> ${selectRequest.customer.name} </span>
                   phòng <span class="textAlert"> ${selectRequest.room.name} ?</span></p>`
            )
            setModal(3);
            setIdDone(selectRequest.id);
        }
    }
    const updateSchedule = async () => {
        let time = new Date(today.getFullYear(), today.getMonth() + offset, today.getDate());
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let data = await getRequestByMonthYearEmployee(month, year, employeeId);
        setSchedule(data);

    }
    const updateDate = async () => {
        let time = new Date(today.getFullYear(), today.getMonth() + offset, today.getDate());
        let date = time.getDate();
        let month = time.getMonth() + 1;
        let year = time.getFullYear();

        displayTime.current.innerHTML = `Tháng ${month} năm ${year}`
        let data = "";
        let startDay = new Date(year, month - 1, 1).getDay();
        let dateArray = [];
        if (startDay == 0) {
            dateArray = ["","","","","",""]
        } else {
            for (let i = 0; i < startDay - 1; i++){
                dateArray.push("");
            }
        }
        let numberOfDays = (new Date(year, month, 0)).getDate();
        for(let i = 1; i <= numberOfDays; i++){
            dateArray.push(new Date(year, month - 1, i));
        }
        setArrayDay(dateArray);
    }
    const getScheduleOnDay = () => {
        if (selectDay) {
            let data = schedule[selectDay.getDate()];
            let array = {};
            let detail = {};
            if (data) {
                for (let e in data) {
                    let dataLevel = data[e].room.level;
                    let dataRoom = data[e].room.name;

                    if (array.hasOwnProperty(dataLevel)){
                        array[dataLevel] += 1;
                    } else {
                        array[dataLevel] = 1;
                    }

                    if (detail.hasOwnProperty(dataRoom)){
                        detail[dataRoom] += 1;
                    } else {
                        detail[dataRoom] = 1;
                    }
                }
                setArrayLevel(array);
                setArrayRoom(detail);
                setArraySchedule(data);
            } else {
                setArrayLevel({});
                setArraySchedule(null);
                setSelectRequest({id: -1})
            }
        }
    }
    const reload = async () => {
        let time = new Date(today.getFullYear(), today.getMonth() + offset, today.getDate());
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let data = await getRequestByMonthYearEmployee(month, year, employeeId);
        let array = await data[selectDay.getDate()];
        let id = selectRequest.id;

        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.id == id){
                setSelectRequest(item);
            }
        }
        setSchedule(data);
        setArraySchedule(array)
    }
    const setLevelSelect = (index) => {
        store.dispatch(setLevel(index));
    }
    const setRoomSelect = (index) => {
        store.dispatch(setRoom(index));
    }
    const handleConfirm = async () => {
        const data = await doneRequestEmployee(idDone);
        if (data.status == 200) {
            toast.success("Xác nhận hoàn thành công việc thành công");
            setModal(-1);
            setIdDone(-1);
            reload();
        } else {
            toast.warn("Xác nhận hoàn thành công việc không thành công");
        }
    }

    useEffect(() => {
        setLevelSelect(-1);
        setRoomSelect(-1);
    },[selectDay])
    useEffect(() => {
        updateSchedule();
        getScheduleOnDay();
        updateDate();
    }, [offset,selectDay])
    return (
        <div className="offset-header employee-page">
            <div className="employee-page-calendar color3 borderradius boxshadow-inset">
                <div/>
                <ScheduleEmployee
                    schedule={schedule}
                    offset={offset}
                    setOffset={setOffset}
                    today={today}
                    displayTime={displayTime}
                    arrayDay={arrayDay}
                    setSelectDay={setSelectDay}
                    selectDay={selectDay}
                />
                <div className="buiding">
                    {level == -1 && <EmployeeBuildingMap arrayLevel={arrayLevel}/>}
                    {level != -1 && <EmployeeDetailMap arrayRoom={arrayRoom}/>}
                </div>
            </div>
            <div className="employee-page-request borderradius color0 boxshadow-inset">
                <div className="employee-page-request-list">
                    {arraySchedule &&
                        arraySchedule.map(e => {
                            return (
                                <div className={`employee-page-request-list-item 
                                ${e.id != selectRequest.id && "employee-page-request-list-item-unselect cursorPoint"}`}
                                     key={e.id}
                                     onClick={() => {setSelectRequest(e)}}
                                >
                                    <div>
                                        {e.requestStatus.id == 1 && "⏳ "}
                                        {e.requestStatus.id == 3 && "✔️ "}
                                        P{e.room.name} : {reduceLengthName(e.mess, 10)}
                                    </div>
                                    <div className="request-holding-time">{getDate(e.timeOrder)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                {selectRequest.id != -1 &&
                    <div className="employee-page-request-item">
                        <div className="employee-page-request-item-title">Chi tiết yêu cầu</div>
                        <div className="employee-page-request-item-time">
                            <div>
                                <div>- Phòng :
                                    <span className="textAlert">
                                        P{selectRequest.room.name}
                                    </span>
                                </div>
                                <div>- Tầng :
                                    <span className="textAlert">
                                        {selectRequest.room.level}
                                    </span>
                                </div>
                            </div>
                            <div className="employee-page-request-item-time-detail color3 borderradius">
                                <div>📆 Ngày :
                                    <span className="textAlert">
                                        {getOnlyDayMonth(selectRequest.timeOrder)}
                                    </span>
                                </div>
                                <div>⏰ Thời gian :
                                    <span className="textAlert">
                                        {getHourMinute(selectRequest.timeOrder)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="employee-page-request-item-time-info">
                            <div className="employee-page-request-item-time-info-title">👨‍🏫 Thông tin khách hàng :</div>
                            <div className="employee-page-request-item-time-info-avatar"
                                 style={{backgroundImage: `url(${selectRequest.customer.account.avatar})`}}
                            />
                            <div className="employee-page-request-item-time-info-detail">
                                <p>- Tên : <span className="textAlert">{selectRequest.customer.name}</span></p>
                                <p>- Email : <span className="textAlert">{selectRequest.customer.account.email}</span></p>
                                <p>- Phone : <span className="textAlert">{selectRequest.customer.phone}</span></p>
                            </div>
                        </div>
                        <div className="employee-page-request-item-time-info">
                            <div className="employee-page-request-item-time-info-title">👨‍🔧 Thông tin nhân viên :</div>
                            <div className="employee-page-request-item-time-info-avatar"
                                 style={{backgroundImage: `url(${selectRequest.employee.account.avatar})`}}
                            />
                            <div className="employee-page-request-item-time-info-detail">
                                <p>- Tên : <span className="textAlert">{selectRequest.employee.name}</span></p>
                                <p>- Email : <span className="textAlert">{selectRequest.employee.account.email}</span></p>
                                <p>- Phone : <span className="textAlert">{selectRequest.employee.phone}</span></p>
                            </div>
                        </div>
                        <div className="employee-page-request-item-mess">
                            <div className="employee-page-request-item-mess-title">Lời nhắn :</div>
                            <textarea
                                className="employee-page-request-item-mess-textAlert borderradius"
                                value={selectRequest.mess}
                                disabled={true}
                            />
                        </div>
                        <div className="employee-page-request-item-button">
                            {selectRequest.requestStatus.id == 1 ?
                                <div
                                    className="employee-page-request-item-button-confirm hover-button color4 borderradius"
                                    onClick={showModal}
                                >
                                    Hoàn thành
                                </div>
                                :
                                <div className="employee-page-request-item-button-done textAlert">
                                    Công việc đã hoàn thành
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <PersonalChat/>
            {useModal == 3 &&
                <ModalConfirm
                    setUseModal={setModal}
                    content={contentModal}
                    confirmAction={handleConfirm}
                />
            }
        </div>
    )
}