import "./detailRequest.css";

export default function DetailWaitingRequest({request}) {
    return (
        <div className="customer-detail-request">
            <div className="customer-detail-request-iconWaiting"></div>
            <div className="customer-detail-request-title">Đang chờ duyệt</div>
        </div>
    )
}