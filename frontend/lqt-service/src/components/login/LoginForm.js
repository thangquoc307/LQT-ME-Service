import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup"
import {login} from "../../service/ApiConnection";
import {toast} from "react-toastify";

export default function LoginForm() {
    const navigate = useNavigate();
    const handleLogin = async (value) => {
        const data = await login(value);
        console.log(data)
        if (data.status == 200) {
            toast.success("Đăng nhập thành công");
            navigate("/");
        }
    }
    const validate = Yup.object({
        userName: Yup.string().required("Xin mời nhập tên đăng nhập"),
        password: Yup.string().required("Xin mời nhập vào mật khẩu")
    })

    return (
        <Formik
            initialValues={{
                userName: "",
                password: ""
            }}
            validationSchema={validate}
            onSubmit={handleLogin}>
            <Form className="login-form">
                <div className="login-form-input">
                    <label htmlFor="userName">Tên tài khoản:</label>
                    <div className="login-form-input-div">
                        <Field id="userName" type="text" name="userName"/>
                        <ErrorMessage name="userName" component="small"/>
                    </div>
                </div>
                <div className="login-form-input">
                    <label htmlFor="password">Mật khẩu:</label>
                    <div className="login-form-input-div">
                        <Field id="password" type="password" name="password"/>
                        <ErrorMessage name="password" component="small"/>
                    </div>
                </div>

                <div className="login-form-button">
                    <div/>
                    <button className="color3 hover-button"
                            onClick={() => {navigate("/")}}>Thoát</button>
                    <button className="color4 hover-button"
                            type="submit">Đăng nhập</button>
                </div>
            </Form>
        </Formik>
    )

}