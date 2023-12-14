import "./detailRequest.css";
import {useState} from "react";
import {getFullDate} from "../../service/formatData";
import {toast} from "react-toastify";
import {sendFeedBack} from "../../service/ApiConnection";
export function DetailDoneRequest({request, reload}) {
    const [star, setStar] = useState(0);
    const [text, setText] = useState("");

    const handleFeedback = async () => {
        if (star == 0) {
            toast.warn("Xin hãy cho sao đánh giá");
        } else if (text == "") {
            toast.warn("Xin hãy cho comment đánh giá");
        } else {
            let feedback = {
                requestId: request.id,
                comment: text,
                star: star
            }
            const data = await sendFeedBack(feedback);
            if (data.status == 200) {
                reload();
                toast.success("Gởi feedback thành công");
            } else {
                toast.error("Gởi feedback không thành công")
            }
        }
    }
    return (
        <div className="customer-detail-request customer-detail-request-done">
            <div className="customer-detail-request-content">
                <p><span className="textAlert">Phòng : </span>P{request.room.name}</p>
                <p><span className="textAlert"> Thời gian : </span>{getFullDate(request.timeOrder)}</p>
                <p><span className="textAlert"> Mô tả :</span></p>
                <textarea className="info-description-mess comment-noborder" disabled={true}>{request.mess}</textarea>
            </div>
            <div className="customer-detail-request-content-info">
                <div className="info-avatar-pic" style={{
                    backgroundImage: `url(${request.employee.account.avatar})`
                }}/>
                <div className="star-container">
                    {
                        request.feedbacks
                            ?<>
                                <div className={`star ${request.feedbacks.star >= 1 ? "starvote" : "starnovote"}`}/>
                                <div className={`star ${request.feedbacks.star >= 2 ? "starvote" : "starnovote"}`}/>
                                <div className={`star ${request.feedbacks.star >= 3 ? "starvote" : "starnovote"}`}/>
                                <div className={`star ${request.feedbacks.star >= 4 ? "starvote" : "starnovote"}`}/>
                                <div className={`star ${request.feedbacks.star >= 5 ? "starvote" : "starnovote"}`}/>

                            </>
                            :<>
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
                            </>
                    }
                </div>
                <div className="customer-detail-request-content-info-description">
                    <p><span className="textAlert"> Nhân viên : </span>{request.employee.name}</p>
                    <p><span className="textAlert"> Liên hệ : </span>{request.employee.phone}</p>
                    <p><span className="textAlert"> Mail : </span>{request.employee.account.email}</p>
                </div>
            </div>
            {
                request.feedbacks
                    ? <textarea className="comment borderradius" type="text"
                                disabled={true}>{request.feedbacks.comment}</textarea>
                    : <textarea className="comment borderradius" type="text"
                              value={text}
                              onChange={(e) => {
                                  setText(e.target.value)
                              }}/>
            }

            <div className="customer-detail-request-button">
                {!request.feedbacks &&
                    <div className="color4 hover-button borderradius" onClick={handleFeedback}>
                        Gởi phản hồi
                    </div>}
            </div>
        </div>
    )
}