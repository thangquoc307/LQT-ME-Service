import "./customerPage.css";
import Building from "../map/Building";
import {useEffect, useState} from "react";
import {getRequestByCustomer} from "../../service/ApiConnection";
import {getDate, getHourMinute, getOnlyDayMonth, reduceLengthName} from "../../service/formatData";
import DetailHoldingRequest from "../customerRequest/DetailHoldingRequest";
import DetailWaitingRequest from "../customerRequest/DetailWaitingRequest";
import {DetailDoneRequest} from "../customerRequest/DetailDoneRequest";
import CustomerCalendar from "../calendar/CustomerCalendar";
import {useSelector} from "react-redux";
import PersonalChat from "../chatbox/PersonalChat";
import PersonalBuilding from "../personalMap/PersonalBuilding";
export default function CustomerPage() {
    const init = {
        id: -1,
        requestStatus: {
            id: -1
        }
    }
    const [list, setList] = useState();
    const [selectRequest, setSelectRequest] = useState(init);
    const modal = useSelector(state => state.modal);
    const unmountSelect = async (e) => {
        await setSelectRequest(init);
        setSelectRequest(e)
    }
    const reload = async () => {
        await setSelectRequest(init);
        const data = await getRequestByCustomer();
        setList(data);
        let tempId = selectRequest.id;
        for (let i = 0; i < data.length; i++) {
            let temp = data[i];
            if (temp.id == tempId){
                setSelectRequest(temp);
                break;
            }
        }
    }
    const getList = async () => {
        const data = await getRequestByCustomer();
        setList(data);
    }
    const cancelSelect = () => {
        setSelectRequest(init);
    }
    useEffect(() => {
        getList();
    }, [modal])

    return(
        <div className="customer-page offset-header">
            <div className="customer-page-schedule borderradius color0 boxshadow-inset">
                <div className="customer-page-schedule-canlendar color3 borderradius">
                    <div className="description-time-customerCalendar">
                        {
                            selectRequest.id != -1 &&
                            <>
                                <p>Thời gian hẹn</p>
                                <p className="textAlert"> {getHourMinute(selectRequest.timeOrder)}</p>
                                <p className="textAlert"> {getOnlyDayMonth(selectRequest.timeOrder)}</p>
                            </>
                        }
                    </div>
                    <CustomerCalendar selectRequest={selectRequest}/>
                </div>
                <div className="customer-page-schedule-list">
                    {list && <>
                        {
                            list.map(e => {
                                return(
                                    <div key={e.id} className={`customer-page-schedule-list-item 
                                    ${e.id != selectRequest.id &&
                                    "cursorPoint customer-page-schedule-list-item-unselect color3"}`}
                                         onClick={() => {unmountSelect(e)}}>
                                        <div>
                                            {e.requestStatus.id == 1 && "⏳ "}
                                            {e.requestStatus.id == 2 && "💬 "}
                                            {e.requestStatus.id == 3 && "✔️ "}
                                            P{e.room.name} : {reduceLengthName(e.mess, 10)}
                                        </div>
                                        <div className="request-holding-time">{getDate(e.timeOrder)}</div>
                                    </div>
                                )})
                        }
                    </>
                    }
                </div>
                <div className="customer-page-status">
                    {selectRequest.requestStatus.id == 1 &&
                        <>
                            <div className="customer-detail-request-title">Đã lên lịch hẹn</div>
                            <div className="customer-detail-request-iconHolding"/>
                        </>}
                    {selectRequest.requestStatus.id == 2 &&
                        <>
                            <div className="customer-detail-request-title">Đang chờ duyệt</div>
                            <div className="customer-detail-request-iconWaiting"/>
                        </>}
                    {selectRequest.requestStatus.id == 3 &&
                        <>
                            <div className="customer-detail-request-title">Đã hoàn thành</div>
                            <div className="customer-detail-request-iconDone"/>
                        </>}
                </div>

                <div className="customer-page-schedule-detail">
                    {selectRequest.requestStatus.id == 1 &&
                        <DetailHoldingRequest request={selectRequest} reload={reload}/>}
                    {selectRequest.requestStatus.id == 2 &&
                        <DetailWaitingRequest
                            request={selectRequest}
                            reload={reload}
                            cancelSelect={cancelSelect}
                        />}
                    {selectRequest.requestStatus.id == 3 &&
                        <DetailDoneRequest
                            request={selectRequest}
                            reload={reload}
                        />}
                </div>
            </div>
            <div className="customer-page-schedule-notification color3 boxshadow-inset borderradius">
                <PersonalBuilding/>
            </div>
            <PersonalChat/>
        </div>
    )

}