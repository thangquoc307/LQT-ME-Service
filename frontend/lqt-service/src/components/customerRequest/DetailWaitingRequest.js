import "./detailRequest.css";
import {getFullDate} from "../../service/formatData";
import {useSelector} from "react-redux";
import ModalConfirm from "../modal/ModalConfirm";
import {store} from "../../redux/store";
import {setModalType} from "../../redux/action";
import {useState} from "react";
import {customerDeleteRequest} from "../../service/ApiConnection";
import {toast} from "react-toastify";
import ModalEdit from "../modal/ModalEdit";

export default function DetailWaitingRequest({request, reload, cancelSelect}) {
    const modal = useSelector(state => state.modal);
    const [contentModal, setContentModal] = useState();


    const showModal = () => {
        setContentModal(
            `<p>Bạn muốn hủy yêu cầu từ<br/>
                   <span class="textAlert"> ${request.customer.name} </span>
                   phòng <span class="textAlert"> ${request.room.name} ?</span></p>`
        )
        setModal(1);
    }
    const setModal = (index) => {
        store.dispatch(setModalType(index));
    }
    const handleConfirm = async () => {
        const data = await customerDeleteRequest(request.id);
        console.log(data)
        if (data.status == 200) {
            toast.success("Hủy yêu cầu thành công");
            setModal(-1);
            cancelSelect();
        } else {
            toast.warn("Hủy yêu cầu không thành công");
        }
    }

    return (
        <div className="customer-detail-request customer-detail-request-waiting">
            {modal == 1 &&
                <ModalConfirm
                    setUseModal={setModal}
                    content={contentModal}
                    confirmAction={handleConfirm}
                />
            }
            {modal == 5 &&
                <ModalEdit
                    request={request}
                    setUseModal={setModal}
                    reload={reload}
                />
            }
            <div className="customer-detail-request-waiting-description">
                <div className="customer-detail-request-waiting-description-info">
                    <div className="customer-detail-request-waiting-description-info-avatar"
                         style={{
                             backgroundImage: `url(${request.customer.account.avatar})`
                         }}
                    />
                    <div>
                        <p><span className="textAlert">Khách hàng : </span>{request.customer.name}</p>
                        <p><span className="textAlert">Số điện thoại : </span>{request.customer.phone}</p>
                        <p><span className="textAlert">Email : </span>{request.customer.account.email}</p>
                    </div>
                </div>
                <p><span className="textAlert">- Phòng : </span>P{request.room.name}</p>
                <p><span className="textAlert">- Tầng : </span>L{request.room.level}</p>
                <p><span className="textAlert">- Ngày yêu cầu : </span>{getFullDate(request.timeRequest)}</p>
                <p><span className="textAlert">- Mô tả : </span></p>
                <textarea className="customer-detail-request-waiting-textarea borderradius comment-noborder"
                          disabled={true}>
                    {request.mess}
                </textarea>
            </div>
            <div className="customer-detail-request-button">
                <div className="color1 hover-button borderradius"
                     onClick={showModal}
                >
                    Xóa yêu cầu
                </div>
                <div className="color4 hover-button borderradius"
                     onClick={() => {setModal(5)}}
                >
                    Sửa yêu cầu
                </div>
            </div>
        </div>
    )
}