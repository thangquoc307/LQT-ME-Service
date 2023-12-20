import {useSelector} from "react-redux";
import "./modalConfirm.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {store} from "../../redux/store";
import {setModalType, setRoom} from "../../redux/action";
import {convertRoom} from "../../service/formatData";
import {jwtDecode} from "jwt-decode";
import {createRequest} from "../../service/ApiConnection";
import {toast} from "react-toastify";

export default function ModalCreateRequest() {
    const room = useSelector(state => state.room);
    const level = useSelector(state => state.level);
    const accountId = jwtDecode(localStorage.getItem("token")).sub;

    const initValue = {
        id: accountId,
        timeOrder: new Date,
        room: convertRoom(level, room),
        mess: "",
        timeRequest: new Date
    }
    const validate = Yup.object({
        timeOrder: Yup.date()
            .required("Mời nhập ngày hẹn")
            .min(new Date(new Date().setHours(new Date().getHours() + 2)),
                "Thời gian phải hơn hiện tại ít nhất 2 tiếng"),
        mess: Yup.string().required("Hãy mô tả ngắn về vấn đề của bạn")
    })
    const handleSubmit = async (value) => {
        const data = await createRequest(value);
        if (data.status == 200){
            cancelCreate();
            toast.success("Sửa yêu cầu thành công");
        } else {
            toast.error("Sửa yêu cầu không thành công");
        }
    }
    const cancelCreate = () => {
        store.dispatch(setModalType(-1));
        store.dispatch(setRoom(-1));
    }

    return (
        <div className="modal-edit borderradius boxshadow-outset">
            <h3 className="textAlert modal-edit-title">Gửi yêu cầu mới</h3>
            <Formik
                initialValues={initValue}
                onSubmit={handleSubmit}
                validationSchema={validate}
            >
                <Form>
                    <div className="modal-edit-form">
                        <div className="modal-edit-form-description">- Phòng : </div>
                        <div className="modal-edit-input">
                            P{convertRoom(level, room)}
                        </div>
                        <div className="modal-edit-form-description">- Thời gian hẹn : </div>
                        <div className="modal-edit-input">
                            <Field
                                name="timeOrder"
                                type="datetime-local"
                                class="modal-edit-select borderradius"
                            />
                            <ErrorMessage name="timeOrder" component="div"/>
                        </div>
                        <div className="modal-edit-form-description">- Tin nhắn : </div>
                        <div className="modal-edit-input">
                            <Field
                                as="textarea"
                                name="mess"
                                class="modal-edit-text borderradius"
                            />
                            <ErrorMessage name="mess" component="div"/>
                        </div>
                    </div>
                    <div className="modal-edit-form-button">
                        <div className="modal-comfirm-cancel cursorPoint color4 borderradius hover-button"
                             onClick={cancelCreate}
                        >Hủy</div>
                        <button
                            className="modal-comfirm-confirm cursorPoint color1 borderradius hover-button"
                            type="submit"
                        >
                            Xác nhận
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}