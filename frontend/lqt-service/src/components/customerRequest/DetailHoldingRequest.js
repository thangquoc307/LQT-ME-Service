import "./detailRequest.css";

export default function DetailHoldingRequest({request}) {
    console.log(request)
    return (
        <div className="customer-detail-request">
            <div className="customer-detail-request-iconHolding"></div>
            <div className="customer-detail-request-title">Đã lên lịch hẹn</div>
        </div>
    )
}