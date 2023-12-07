import "./requestManage.css"
import {useEffect, useState} from "react";
import {getRequestHolding} from "../../service/ApiConnection";
import {getDate, reduceLengthName} from "../../service/formatData";
export default function RequestManage() {

    const [requestList, setRequestList] = useState();
    const [selectRequest, setSelectRequest] = useState(-1);
    const [detailRequest, setDetailRequest] = useState();


    const getRequestList = async () => {
        const data = await getRequestHolding();
        setRequestList(data);
    }
    const getDetail = () => {
        setDetailRequest(requestList[selectRequest]);
    }
    useEffect(() => {
        getRequestList();
    }, [])
    useEffect(() => {
        if (selectRequest != -1){
            getDetail();
        }
    }, [selectRequest])
    return (
        <div className="request">
            <div className="request-header color5">Quản lý yêu cầu</div>
            <div className="request-list color0 boxshadow-inset">
                <div className="request-list-item">
                    {requestList &&
                        requestList.map((e, index) => {
                            return (
                                <div key={e.id} className={`request-holding 
                                ${index != selectRequest && "request-holding-unselect cursorPoint"}`}
                                     onClick={() => {setSelectRequest(index)}}
                                >
                                    <div>P{e.room.name} : {reduceLengthName(e.mess, 10)}</div>
                                    <div className="request-holding-time">{getDate(e.timeRequest)}</div>
                                </div>
                            )
                        })

                    }
                </div>
                <div className="request-list-detail">
                    {
                        detailRequest && (
                            <>
                                <div className="request-list-detail-room">
                                    Phòng : {detailRequest.room.name}
                                </div>
                                <div className="request-list-detail-time">
                                    <p>
                                        <span className="textAlert">- Gửi yêu cầu : </span>
                                        {getDate(detailRequest.timeRequest)}</p>
                                    <p>
                                        <span className="textAlert">- Thời gian hẹn :  </span>
                                        {getDate(detailRequest.timeOrder)}</p>
                                </div>
                                <div className="request-list-detail-info color3">
                                    <div className="request-list-detail-info-avatar"
                                         style={{backgroundImage: `url("${detailRequest.customer.account.avatar}")`}}
                                    />
                                    <div className="request-list-detail-info-des">
                                        <p>
                                            <span className="textAlert"></span>
                                            {reduceLengthName(detailRequest.customer.name, 15)}
                                        </p>
                                        <p><span className="textAlert">ĐT : </span>
                                            {detailRequest.customer.phone}
                                        </p>
                                    </div>

                                </div>
                                <div className="request-list-detail-mess">
                                    <span className="textAlert">Lời nhắn : </span>{detailRequest.mess}
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}