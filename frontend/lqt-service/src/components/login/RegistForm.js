import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function RegistForm() {
    const navigate = useNavigate();
    const validation = Yup.object({
        username: Yup.string()
            .required("Vui lòng nhập tên tài khoản")
            .min(10,"Tên đăng nhập phải nhiều hơn 10 ký tự")
            .max(100, "Tên quá dài"),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu")
            .matches(/^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$/, "Mật khẩu trên 8 ký tự bao gồm số và chữ")
            .max(100, "Mật khẩu quá dài"),
        re_password: Yup.string()
            .test({
                test: (value, context) => {
                    const pass = context.parent.password;
                    return value == pass;
                },
                message: "Mật khẩu không trùng khớp"
            }),
        email: Yup.string()
            .required("Vui lòng nhập email")
            .matches(/^.{8,}@.+\.com$/, "Email không hợp lệ"),
        phone: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(/^(\+|0)[0-9]{9,12}$/,"Số điện thoại không hợp lệ"),
        name: Yup.string()
            .required("Vui lòng nhập họ tên"),
        birthday: Yup.date()
            .required("Vui lòng nhập ngày sinh")
            .test({
                test: value => {
                    let birthday = new Date(value);
                    let now = new Date;
                    now.setFullYear(now.getFullYear() - 18);
                    return birthday < now;
                },
                message: "Bạn chưa đủ 18 tuổi"
            }),
        licenseIdCard: Yup.string()
            .required("Vui lòng nhập căn cước")
            .matches(/^[0-9]{9,12}$/, "Số căn cước không hợp lệ")
    })
    let confirm = false;
    const handleRegist = (value) => {

        console.log(value)
        if (!confirm) {
            alert(111)
            toast.warn("Bạn hãy chấp nhận điều khoản");
        } else {

        }

    }
    return (
        <Formik initialValues={{
            username: "",
            password: "",
            re_password: "",
            email: "",
            phone: "",
            name: "",
            birthday: "",
            licenseIdCard: ""
        }}
                onSubmit={(values) => {handleRegist(values)}}
                validationSchema={validation}>
            <Form>
                <div className="regit-form">
                    <div className="regit-form-input">
                        <label htmlFor="username">Tên tài khoản:</label>
                        <Field id="username" type="text" name="username"/>
                        <ErrorMessage name="username" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="name">Họ và tên:</label>
                        <Field id="name" type="text" name="name"/>
                        <ErrorMessage name="name" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="password">Mật khẩu:</label>
                        <Field id="password" type="password" name="password"/>
                        <ErrorMessage name="password" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="re_password">Xác nhận mật khẩu:</label>
                        <Field id="re_password" type="password" name="re_password"/>
                        <ErrorMessage name="re_password" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="email">Email:</label>
                        <Field id="email" type="text" name="email"/>
                        <ErrorMessage name="email" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="phone">Số điện thoại:</label>
                        <Field id="phone" type="text" name="phone"/>
                        <ErrorMessage name="phone" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="birthday">Sinh nhật:</label>
                        <Field id="birthday" type="date" name="birthday"/>
                        <ErrorMessage name="birthday" component="small"/>
                    </div>
                    <div className="regit-form-input">
                        <label htmlFor="licenseIdCard">Căn cước công dân:</label>
                        <Field id="licenseIdCard" type="text" name="licenseIdCard"/>
                        <ErrorMessage name="licenseIdCard" component="small"/>
                    </div>
                </div>
                <div className="regit-form-checkbox">
                    <div/>
                    <div>
                        <label className="toggle-switch">
                            <input type="checkbox" value={confirm}/>
                            <div className="toggle-switch-background">
                                <div className="toggle-switch-handle"/>
                            </div>
                        </label>
                    </div>
                    <div className="regit-form-checkbox-title">
                        Tôi chấp nhận các điều khoản của chương trình
                    </div>
                </div>
                <div className="regit-form-button">
                    <div/>
                    <button className="color3 hover-button"
                            onClick={() => {navigate("/")}}>Thoát</button>
                    <button className="color4 hover-button"
                            type="submit">Đăng ký</button>
                </div>
            </Form>
        </Formik>
    )
}