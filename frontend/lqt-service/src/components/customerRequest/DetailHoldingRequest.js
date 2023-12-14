import "./detailRequest.css";
import {getFullDate} from "../../service/formatData";

export default function DetailHoldingRequest({request}) {
    console.log(request)
    return (
        <div className="customer-detail-request customer-detail-request-holding">
            <div className="customer-detail-request-holding-description">
                <div className="customer-detail-request-waiting-description-info">
                    <div className="customer-detail-request-waiting-description-info-avatar"
                         style={{
                             backgroundImage: `url(${request.employee.account.avatar})`
                         }}
                    />
                    <div>
                        <p><span className="textAlert">Nhân viên phụ trách : </span>{request.employee.name}</p>
                        <p><span className="textAlert">Số điện thoại : </span>{request.employee.phone}</p>
                        <p><span className="textAlert">Email : </span>{request.employee.account.email}</p>
                    </div>
                </div>

                <p><span className="textAlert">- Phòng : </span>P{request.room.name}</p>
                <p><span className="textAlert">- Tầng : </span>L{request.room.level}</p>
                <p><span className="textAlert">- Ngày yêu cầu : </span>{getFullDate(request.timeRequest)}</p>
                <p><span className="textAlert">- Mô tả : </span></p>
                <textarea className="customer-detail-request-waiting-textarea borderradius comment-noborder" disabled={true}>
                    {request.mess}
                </textarea>

            </div>

            <div className="customer-detail-request-holding-button textAlert">
                Xin hãy để ý điện thoại vào thời gian đã hẹn !!!
            </div>

        </div>
    )
}