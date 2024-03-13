import { Link } from "react-router-dom";
import { useState } from "react";
import authService from '../../../controller/services/AuthService';
import './login.css'
import CustomInput from '../../components/form/form.jsx'
import email_icon from '../../assets/email.svg';
import lock_icon from '../../assets/lock.svg';
import eye_icon from '../../assets/eye.svg';
import eye_close_icon from '../../assets/eye_close.svg';
import saman from '../../assets/saman.jpg';
import google_icon from '../../assets/google.svg';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="login-form">
                        <h2 className="title">Inicio de Sesión</h2>
                        <CustomInput label={"Email"} preffixIcon={<img src={email_icon} className="icon" alt="icon" />} type={"email"} placeholder={"mail@correo.unimet.edu.ve"}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}>
                        </CustomInput>
                        <CustomInput id="passwordInput" label={"Contraseña"} preffixIcon={<img src={lock_icon} className="icon" alt="icon" />} suffixIcon={
                            <div><img src={eye_close_icon} className="icon" alt="icon" id='eye_close' /><img src={eye_icon} className="icon" alt="icon" id='eye_open' style={{ display: "none" }} /></div>
                        } onClick={passwordVisibility} type={"password"} placeholder={"123"}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}>
                        </CustomInput>
                        <a href="" className="forgot">Olvidé mi contraseña</a>
                        <button type="button" className="send" onClick={() => authService.signIn(email, password)}>Login</button>
                        <button type="button" className="send" onClick={() => authService.signOut()}>logout</button>
                        <p>{authService.getCurrentUser()?.email}</p>
                        <hr></hr>
                        <button type="button" className="google" onClick={() => authService.signUpWithGoogle()}><img src={google_icon} className="icon" alt="icon" /><p>Acceder con Google</p></button>
                        <p className="register">¿No estás registrado? <Link to="/register">Crear Cuenta</Link></p>
                    </div>
                </div>
                <div className="banner">
                    <img src={saman} alt="saman" className="saman-image" />
                </div>
            </div>
        </>
    )
}

function passwordVisibility() {
    var inputType = document.getElementById("passwordInput");
    var close = document.getElementById("eye_close");
    var open = document.getElementById("eye_open");
    if (inputType.type === "password") {
        inputType.type = "text";
        close.style.display = 'none';
        open.style.display = 'flex';
    } else {
        inputType.type = "password";
        close.style.display = 'flex';
        open.style.display = 'none';
    }
}

