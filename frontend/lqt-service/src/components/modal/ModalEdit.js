import "./modalConfirm.css"
import * as Yup from "yup"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {editRequest, getRoomByCustomer} from "../../service/ApiConnection";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
export default function ModalEdit({setUseModal,request,reload}) {
    const [roomList, setRoomList] = useState();
    const initValue = {
        id: request.id,
        timeOrder: request.timeOrder,
        room: request.room.id + "",
        mess: request.mess,
        timeRequest: new Date
    }
    const validate = Yup.object({
        timeOrder: Yup.date()
            .required("Mời nhập ngày hẹn")
            .min(new Date(new Date().setHours(new Date().getHours() + 2)),
                "Thời gian phải hơn hiện tại ít nhất 2 tiếng"),
        room: Yup.number().min(1, "Mời chọn phòng gặp vấn đề"),
        mess: Yup.string().required("Hãy nhập mô tả ngắn về vấn đề")
    })
    const handleSubmit = async (value) => {
        const data = await editRequest(value);
        if (data.status == 200){
            toast.success("Sửa yêu cầu thành công");
            reload();
            setUseModal(-1);
        } else {
            toast.error("Sửa yêu cầu không thành công");
        }
    }
    const getRoomList = async () => {
        const data = await getRoomByCustomer(request.customer.id);
        setRoomList(data);
    }
    useEffect(() => {
        getRoomList();
    },[])

    if (!roomList) {return null}
    return (
        <div className="modal-edit borderradius boxshadow-outset">
            <h3 className="textAlert modal-edit-title">Chỉnh sửa yêu cầu</h3>
            <div className="modal-edit-info">
                <div className="modal-edit-avatar"
                     style={{
                         backgroundImage: `url(${request.customer.account.avatar})`
                     }}
                />
                <div>
                    <p><span className="textAlert">- Khách hàng : </span>{request.customer.name}</p>
                    <p><span className="textAlert">- Số điện thoại : </span>{request.customer.phone}</p>
                    <p><span className="textAlert">- Email : </span>{request.customer.account.email}</p>

                </div>
            </div>
            <Formik
                initialValues={initValue}
                onSubmit={handleSubmit}
                validationSchema={validate}
            >
                <Form>
                    <div className="modal-edit-form">
                        <div className="modal-edit-form-description">- Phòng : </div>
                        <div className="modal-edit-input">
                            <Field
                                name="room"
                                as="select"
                                class="modal-edit-select borderradius"
                            >
                                <option value="0">--Mời chọn phòng--</option>
                                {
                                    roomList.map((e, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={e.id}
                                            >
                                                P{e.name}
                                            </option>
                                        )
                                    })
                                }
                            </Field>
                            <ErrorMessage name="room" component="div"/>
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
                             onClick={() => {setUseModal(-1)}}
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