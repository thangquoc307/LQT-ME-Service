import "./customerPage.css";
import Building from "../map/Building";
import {useEffect, useState} from "react";
import {getRequestByCustomer} from "../../service/ApiConnection";
import {getDate, reduceLengthName} from "../../service/formatData";
import DetailHoldingRequest from "../customerRequest/DetailHoldingRequest";
import DetailWaitingRequest from "../customerRequest/DetailWaitingRequest";
import {DetailDoneRequest} from "../customerRequest/DetailDoneRequest";
export default function CustomerPage() {
    const init = {
        id: -1,
        requestStatus: {
            id: -1
        }
    }
    const [list, setList] = useState();
    const [selectRequest, setSelectRequest] = useState(init);
    const unmountSelect = async (e) => {
        await setSelectRequest(init);
        setSelectRequest(e)
    }
    const getList = async () => {
        const data = await getRequestByCustomer();
        setList(data);
    }
    useEffect(() => {
        getList();
    }, [])

    return(
        <div className="customer-page offset-header">
            <div className="customer-page-schedule borderradius color0 boxshadow-inset">
                <div className="customer-page-schedule-canlendar color3 borderradius boxshadow-outset">

                </div>
                <div className="customer-page-schedule-list">
                    {list && <>
                        {
                            list.map(e => {
                                return(
                                    <div key={e.id} className={`customer-page-schedule-list-item 
                                    ${e.id != selectRequest.id &&
                                    "cursorPoint customer-page-schedule-list-item-unselect color3"}
                                    `}
                                         onClick={() => {unmountSelect(e)}}
                                    >
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

                <div className="customer-page-schedule-detail">
                    {selectRequest.requestStatus.id == 1 &&
                        <DetailHoldingRequest request={selectRequest}/>}
                    {selectRequest.requestStatus.id == 2 &&
                        <DetailWaitingRequest request={selectRequest}/>}
                    {selectRequest.requestStatus.id == 3 &&
                        <DetailDoneRequest request={selectRequest}/>}
                </div>
            </div>
            <div className="customer-page-schedule-notification">
                <Building/>
            </div>

        </div>
    )

}