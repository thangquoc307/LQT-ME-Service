import "./schedule.css"
import {sameDate} from "../../service/formatData";
export function ScheduleEmployee(
    {schedule,setOffset,offset,today,displayTime,arrayDay,setSelectDay,selectDay}) {

    return (
        <div className="schedule-employee">
            <div className="schedule-calendar">
                <div ref={displayTime} className="schedule-calendar-time-employee color5"/>
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
                    <div className="schedule-calendar-detail-content-body">
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
        </div>
    )
}