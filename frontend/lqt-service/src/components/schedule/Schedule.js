import "./schedule.css"
import {useEffect, useRef, useState} from "react";
import {getHourMinute, reduceLengthName, sameDate} from "../../service/formatData";
import {doneRequest, getRequestByMonthYear} from "../../service/ApiConnection";
import {useSelector} from "react-redux";
import ModalConfirm from "../modal/ModalConfirm";
import {store} from "../../redux/store";
import {setModalType} from "../../redux/action";
import {toast} from "react-toastify";
export function Schedule() {
    const [today, setToday] = useState(new Date());
    const [selectDay, setSelectDay] = useState();
    const displayTime = useRef();
    const displaySchedule = useRef();
    const [arrayDay, setArrayDay] = useState([]);
    const [offset, setOffset] = useState(0);
    const [schedule, setSchedule] = useState();
    const [scheduleOnDay, setScheduleOnDay] = useState();
    const useModal = useSelector(state => state.modal);
    const [contentModal, setContentModal] = useState();
    const [idDone, setIdDone] = useState(-1);
    const showModal = (e) => {
        if (e.requestStatus.id == 1) {
            setContentModal(
                `<p>Xác nhận hoàn thành yêu cầu của khách hàng<br/>
                   <span class="textAlert"> ${e.customer.name} </span>
                   phòng <span class="textAlert"> ${e.room.name} ?</span></p>`
            )
            setModal(3);
            setIdDone(e.id);
        }
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
    const updateSchedule = async () => {
        let time = new Date(today.getFullYear(), today.getMonth() + offset, today.getDate());
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let data = await getRequestByMonthYear(month, year);
        setSchedule(data);
        if (selectDay){
            let day = selectDay.getDate() + "";
            setScheduleOnDay(data[day]);
        }
    }
    const chooseScheduleDay = () => {
        if (selectDay){
            let day = selectDay.getDate() + "";
            let data = schedule[day];
            setScheduleOnDay(data);
        }
    }
    const handleConfirm = async () => {
        const data = await doneRequest(idDone);
        if (data.status == 200) {
            toast.success("Xác nhận hoàn thành công việc thành công");
            setModal(-1);
            setIdDone(-1);
        } else {
            toast.warn("Xác nhận hoàn thành công việc không thành công");
        }
    }
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    useEffect(() => {
        chooseScheduleDay();
    }, [selectDay])

    useEffect(() => {
        updateDate();
        updateSchedule();
    }, [offset, useModal])

    return (
        <div className="schedule">
            <div className="schedule-calendar">
                <div ref={displayTime} className="schedule-calendar-time color5"/>
                <div className="schedule-calendar-detail">
                    <div className="schedule-calendar-detail-button-back-container">
                        <div className="schedule-calendar-detail-button-back color0"
                             onClick={() => {setOffset(offset - 1)}}
                             title="Tháng trước"/>
                    </div>
                    <div className="schedule-calendar-detail-button-current boxshadow-outset color0"
                         onClick={() => {setOffset(0)}}
                         title="Quay lại thời gian hiện tại"/>
                    <div className="schedule-calendar-detail-button-next-container">
                        <div className="schedule-calendar-detail-button-next color0"
                             onClick={() => {setOffset(offset + 1)}}
                             title="Tháng sau"/>
                    </div>
                    <div className="schedule-calendar-detail-content-header">
                        <div>T2</div>
                        <div>T3</div>
                        <div>T4</div>
                        <div>T5</div>
                        <div>T6</div>
                        <div className="color5">T7</div>
                        <div className="color1">CN</div>`
                    </div>
                    <div className="schedule-calendar-detail-content-body" ref={displaySchedule}>
                        {
                            arrayDay.map((e) => {
                                if (e == ""){
                                    return (
                                        <div key={e.id}/>
                                    )
                                } else {
                                    return (
                                        schedule ?
                                            <div className={`detail-day cursorPoint 
                                                    ${sameDate(e, today) ? "detail-day-today" : ""}
                                                    ${sameDate(e, selectDay) ? "detail-day-select" : "detail-day-unselect"}`}
                                                 onClick={() => {setSelectDay(e)}}
                                                 key={e.id}
                                            >
                                                {e.getDate()}
                                                {schedule[e.getDate()] &&
                                                    <span className="detail-day-alert color1">
                                                        {schedule[e.getDate()].length}
                                                        </span>
                                                }
                                            </div>
                                            :
                                            <div className={`detail-day cursorPoint 
                                                    ${sameDate(e, today) ? "detail-day-today" : ""}
                                                    ${sameDate(e, selectDay) ? "detail-day-select" : "detail-day-unselect"}`}
                                                 onClick={() => {setSelectDay(e)}}
                                                 key={e.id}
                                            >
                                                {e.getDate()}
                                            </div>

                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-detail boxshadow-inset color0">
                {
                    scheduleOnDay ?
                        <div className="schedule-detail-has">
                            {
                                scheduleOnDay.map(e => {
                                    return (
                                        <div className={`schedule-detail-has-item 
                                        ${e.requestStatus.id == 1 ?
                                            "schedule-detail-has-item-holding cursorPoint" :
                                            "schedule-detail-has-item-done"}`}
                                             key={e.id}
                                             onClick={() => {showModal(e)}}
                                        >
                                            <p>
                                                {e.requestStatus.id == 1 ? "⏱️" : "✔️"}
                                                {getHourMinute(e.timeOrder)} - P{e.room.name}
                                            </p><br/>
                                            <p>KH: {reduceLengthName(e.customer.name, 20)}</p>
                                            <p>- SDT : {e.customer.phone}</p>
                                            <p>NV: {reduceLengthName(e.employee.name, 20)}</p>
                                            <p>- SDT : {e.employee.phone}</p>
                                        </div>
                                    )
                                })
                            }
                        </div> : <div className="schedule-detail-empty"/>
                }
            </div>
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