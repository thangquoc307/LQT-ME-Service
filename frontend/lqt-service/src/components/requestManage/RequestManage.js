import "./requestManage.css"
import {useEffect, useState} from "react";
import {deleteRequest, getRequestHolding, getRequestHoldingByRoom} from "../../service/ApiConnection";
import {convertRoom, getDate, reduceLengthName} from "../../service/formatData";
import ModalConfirm from "../modal/ModalConfirm";
import {toast} from "react-toastify";
import ModalSetupSchedule from "../modal/ModalSetupSchedule";
import {store} from "../../redux/store";
import {selectChatCustomer, setModalType} from "../../redux/action";
import {useSelector} from "react-redux";
export default function RequestManage() {
    const [requestList, setRequestList] = useState();
    const [selectRequest, setSelectRequest] = useState(-1);
    const [detailRequest, setDetailRequest] = useState();
    const [contentModal, setContentModal] = useState();
    const modal = useSelector(state => state.modal);
    const level = useSelector(state => state.level);
    const room = useSelector(state => state.room);
    const showModal = () => {
        setContentModal(
            `<p>Bạn muốn hủy yêu cầu từ<br/>
                   <span class="textAlert"> ${detailRequest.customer.name} </span>
                   phòng <span class="textAlert"> ${detailRequest.room.name} ?</span></p>`
        )
        setModal(1);
    }
    const handleConfirm = async () => {
        const data = await deleteRequest(detailRequest.id);

        if (data.status == 200) {
            toast.success("Hủy yêu cầu thành công");
            setSelectRequest(-1);
            setModal(-1);
        } else {
            toast.warn("Hủy yêu cầu không thành công");
        }
    }
    const getRequestList = async () => {
        if (level != -1 && room != -1) {
            const data = await getRequestHoldingByRoom(convertRoom(level, room));
            setRequestList(data);
            setSelectRequest(-1);
        } else {
            const data = await getRequestHolding();
            setRequestList(data);
            setSelectRequest(-1);
        }
    }
    const getDetail = () => {
        setDetailRequest(requestList[selectRequest]);
    }
    const chatWithCustomer = (e) => {
        store.dispatch(selectChatCustomer(e))
    }
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    useEffect(() => {
        getRequestList();
    }, [room])
    useEffect(() => {
        if (selectRequest != -1){
            getDetail();
        } else {
            setDetailRequest(null);
        }
    }, [selectRequest])
    return (
        <div className="request">
            {modal == 2 &&
                <ModalSetupSchedule
                    request={detailRequest}
                    setUseModal={setModal}
                    setSelectRequest={setSelectRequest}
                />
            }
            {modal == 1 &&
                <ModalConfirm
                    setUseModal={setModal}
                    content={contentModal}
                    confirmAction={handleConfirm}
                />
            }
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
                                <div className="request-list-detail-info color3 cursorPoint"
                                     onClick={() => {chatWithCustomer(detailRequest.customer.id)}}
                                >
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
                                <div className="request-list-detail-button">
                                    <div/>
                                    <div className="request-list-detail-button-item color4 borderradius hover-button"
                                    onClick={showModal}>Hủy</div>
                                    <div className="request-list-detail-button-item color5 borderradius hover-button"
                                    onClick={() => {setModal(2)}}>Đặt lịch</div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}