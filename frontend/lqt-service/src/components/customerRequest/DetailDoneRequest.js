import "./detailRequest.css";
import {useState} from "react";
import {getFullDate} from "../../service/formatData";
import {toast} from "react-toastify";
export function DetailDoneRequest({request}) {
    const [star, setStar] = useState(0);
    const [text, setText] = useState("");
    const sendFeedBack = () => {
        if (star == 0) {
            toast.warn("Xin hãy cho sao đánh giá");
        } else if (text == "") {
            toast.warn("Xin hãy cho comment đánh giá");
        } else {
            toast.success("Gởi feedback thành công");
        }
    }

    return (
        <div className="customer-detail-request">
            <div className="customer-detail-request-iconDone"></div>
            <div className="customer-detail-request-title">Đã hoàn thành</div>
            <div className="customer-detail-request-content">
                <div className="customer-detail-request-content-info">
                    <div className="info-avatar color3">
                        <div className="info-avatar-pic" style={{
                            backgroundImage: `url(${request.employee.account.avatar})`
                        }}/>
                        <div>
                            <p><span className="textAlert"> Nhân viên : </span>{request.employee.name}</p>
                            <p><span className="textAlert"> Liên hệ : </span>{request.employee.phone}</p>
                            <p><span className="textAlert"> Mail : </span>{request.employee.account.email}</p>
                        </div>
                    </div>
                    <div className="info-description">
                        <p><span className="textAlert">Phòng : </span>P{request.room.name}</p>
                        <p><span className="textAlert"> Thời gian : </span>{getFullDate(request.timeOrder)}</p>
                        <p><span className="textAlert"> Mô tả :</span></p>
                        <p className="info-description-mess">{request.mess}</p>
                    </div>
                </div>

                <textarea className="comment borderradius" type="text"
                          value={text}
                          onChange={(e) => {
                              setText(e.target.value)
                          }}/>
                <div className="star-container">
                    <div className={`star ${star >= 1 ? "starvote" : "starnovote"}`}
                        title={"Quá tệ"} onClick={() => {setStar(1)}}/>
                    <div className={`star ${star >= 2 ? "starvote" : "starnovote"}`}
                        title={"Tệ"} onClick={() => {setStar(2)}}/>
                    <div className={`star ${star >= 3 ? "starvote" : "starnovote"}`}
                        title={"Cũng được"} onClick={() => {setStar(3)}}/>
                    <div className={`star ${star >= 4 ? "starvote" : "starnovote"}`}
                        title={"Tốt"} onClick={() => {setStar(4)}}/>
                    <div className={`star ${star >= 5 ? "starvote" : "starnovote"}`}
                        title={"Tuyệt vời"} onClick={() => {setStar(5)}}/>
                </div>
            </div>
            <div className="customer-detail-request-button">
                <div className="color4 hover-button borderradius" onClick={sendFeedBack}>Gởi phản hồi</div>
            </div>
        </div>
    )
}