import "./modalConfirm.css";
import {useEffect, useState} from "react";
import {getDate} from "../../service/formatData";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {confirmSchedule, getEmployeeList} from "../../service/ApiConnection";
import * as Yup from "yup"
import {toast} from "react-toastify";
export default function ModalSetupSchedule({setUseModal,request,setSelectRequest}) {
    const [timeOrder, setTimeOrder] = useState(new Date(request.timeOrder));
    const [employeeList, setEmployeeList] = useState();
    const getEmployee = async () => {
        const data = await getEmployeeList();
        setEmployeeList(data);
    }
    const handleSubmit = async (value) => {
        const data = await confirmSchedule(value);
        if (data.status == 200) {
            toast.success("Đăng ký lịch thành công");
            setSelectRequest(-1);
            setUseModal(-1);
        } else {
            toast.warn("Đăng ký lịch không thành công");
        }

    }
    const validate = Yup.object({
        timeOrder: Yup.date()
            .required("Mời nhập ngày hẹn")
            .min(new Date(new Date().setHours(new Date().getHours() + 2)),
                "Thời gian phải hơn hiện tại ít nhất 2 tiếng"),
        employeeId: Yup.number().min(1, "Mời chọn nhân viên đảm nhận")
    })
    useEffect(() => {
       getEmployee();
    },[])

    if (!employeeList) {
        return null;
    }
    return (
        <Formik
            initialValues={
                {
                    timeOrder: request.timeOrder,
                    employeeId: 0,
                    id: request.id
                }
            }
            onSubmit={handleSubmit}
            validationSchema={validate}
        >
            <Form>
                <div className="modal-schedule borderradius boxshadow-outset">
                    <div className="modal-schedule-content">
                        <div className="modal-schedule-content-div">Khách hàng : </div>
                        <div className="modal-schedule-content-div">{request.customer.name}</div>
                        <div className="modal-schedule-content-div">Phòng : </div>
                        <div className="modal-schedule-content-div">P{request.room.name}</div>
                        <div className="modal-schedule-content-div">Số điện thoại : </div>
                        <div className="modal-schedule-content-div">{request.customer.phone}</div>
                        <div className="modal-schedule-content-div">Email : </div>
                        <div className="modal-schedule-content-div">{request.customer.account.email}</div>
                        <div className="modal-schedule-content-div">Thời gian gửi yêu cầu : </div>
                        <div className="modal-schedule-content-div">{getDate(request.timeRequest)}</div>
                        <div className="modal-schedule-content-div">
                            <span className="textAlert">**</span> Chọn thời gian hẹn :
                        </div>
                        <div className="modal-schedule-content-field">
                            <Field
                                name="timeOrder"
                                className="modal-schedule-content-input borderradius"
                                type="datetime-local"
                            />
                            <ErrorMessage name="timeOrder" component="small"/>
                        </div>

                        <div className="modal-schedule-content-div">
                            <span className="textAlert">**</span> Chọn nhân viên :
                        </div>
                        <div className="modal-schedule-content-field">
                            <Field
                                name="employeeId"
                                className="modal-schedule-content-select borderradius"
                                as="select"
                            >
                                <option value={0}>-- Chọn nhân viên --</option>
                                {employeeList.map(e => {
                                    return(
                                        <option key={e.id} value={e.id}>{e.name}</option>
                                    )

                                })}
                            </Field>
                            <ErrorMessage name="employeeId" component="small"/>
                        </div>
                    </div>

                    <div className="modal-schedule-content-title">Lời nhắn từ khách hàng : </div>
                    <div className="modal-schedule-content-mess borderradius">{request.mess}</div>

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

    )

}