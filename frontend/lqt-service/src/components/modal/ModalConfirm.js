import "./modalConfirm.css";
export default function ModalConfirm({content, setUseModal, confirmAction}) {
    const handleConfirm = () => {
        confirmAction();
    }
    return (
        <div className="modal-comfirm borderradius boxshadow-outset">
            <div className="modal-comfirm-content" dangerouslySetInnerHTML={{ __html: content }}/>
            <div className="modal-comfirm-cancel color4 borderradius cursorPoint hover-button"
                 onClick={() => {setUseModal(0)}}
            >
                Hủy bỏ
            </div>
            <div className="modal-comfirm-confirm color1 borderradius cursorPoint hover-button"
                 onClick={handleConfirm}
            >
                Xác nhận
            </div>
        </div>
    )
}