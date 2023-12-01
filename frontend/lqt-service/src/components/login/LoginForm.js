import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
    const handleLogin = (value) => {

    }

    return (
        <Formik
            initialValues={{
                login_username: "",
                login_password: ""
            }}
            onSubmit={handleLogin}>
            <Form className="login-form">
                <div className="login-form-input">
                    <label htmlFor="login_username">Tên tài khoản:</label>
                    <Field id="login_username" type="text" name="login_username"/>
                </div>
                <div className="login-form-input">
                    <label htmlFor="login_password">Mật khẩu:</label>
                    <Field id="login_password" type="password" name="login_password"/>
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