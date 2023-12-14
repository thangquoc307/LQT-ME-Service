import "./canlendar.css";
import {useEffect, useState} from "react";
export default function CustomerCalendar({selectRequest}) {
    const [selectTime, setSelectTime] = useState("");
    const [array, setArray] = useState();
    const now = new Date();
    let month;
    let year;
    const getSelectTime = async () => {
        let arraySetup = [];
        if (selectRequest.id != -1) {
            const timeSelect = new Date(selectRequest.timeOrder);
            setSelectTime(timeSelect.getDate());
            month = timeSelect.getMonth();
            year = timeSelect.getFullYear();
        } else {
            month = now.getMonth();
            year = now.getFullYear();
        }

        let startDay = (new Date(year, month, 1)).getDay();
        let numberOfDays = (new Date(year, month + 1, 0)).getDate();

        if (startDay == 0) {
            arraySetup = ["","","","","",""]
        } else {
            for (let i = 0; i < startDay - 1; i++){
                arraySetup.push("");
            }
        }
        for(let i = 1; i <= numberOfDays; i++){
            arraySetup.push(i);
        }
        setArray(arraySetup);
    }
    useEffect(() => {
        getSelectTime();
    },[selectRequest])

    if (!array) {
        return null;
    } else {
        return (
            <div className="calendar">
                <div>T2</div>
                <div>T3</div>
                <div>T4</div>
                <div>T5</div>
                <div>T6</div>
                <div className="color4">T7</div>
                <div className="color5">CN</div>
                {
                    array.map((e, index)=> {
                        if (e == ""){
                            return (<div></div>)
                        } else {
                            return (
                                <div
                                    key={index}
                                    className={`
                                ${(e == now.getDate() && now.getMonth() == month && now.getFullYear() == year)
                                        ? "select-day color0"
                                        : "calendar-day"
                                    }
                                ${e == selectTime && "color0"}`}>
                                    {e == selectTime ? "⏲️" : e}
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}