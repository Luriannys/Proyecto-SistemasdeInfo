import { Link } from "react-router-dom";
import './login.css'
import CustomInput from '../../components/form/form.jsx'
import email_icon from '../../assets/email.svg';
import lock_icon from '../../assets/lock.svg';
import eye_icon from '../../assets/eye.svg';
import eye_close_icon from '../../assets/eye_close.svg';
import saman from '../../assets/saman.jpg';
import google_icon from '../../assets/google.svg';

export default function Login() {
    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="login-form">
                        <h2 className="title">Inicio de Sesión</h2>
                        <CustomInput label={"Email"} preffixIcon={<img src={email_icon} className="icon" alt="icon" />} type={"email"} placeholder={"mail@correo.unimet.edu.ve"}></CustomInput>
                        <CustomInput id="passwordInput" label={"Contraseña"} preffixIcon={<img src={lock_icon} className="icon" alt="icon" />} suffixIcon={
                            <div><img src={eye_close_icon} className="icon" alt="icon" id='eye_close' /><img src={eye_icon} className="icon" alt="icon" id='eye_open' style={{ display: "none" }} /></div>
                        } onClick={passwordVisibility} type={"password"} placeholder={"123"}></CustomInput>
                        <a href="" className="forgot">Olvidé mi contraseña</a>
                        <button type="button" className="send">Login</button>
                        <hr></hr>
                        <button type="button" className="google"><img src={google_icon} className="icon" alt="icon" /><p>Acceder con Google</p></button>
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
    var x = document.getElementById("passwordInput");
    var y = document.getElementById("eye_close");
    var z = document.getElementById("eye_open");
    if (x.type === "password") {
        x.type = "text";
        y.style.display = 'none';
        z.style.display = 'flex';
    } else {
        x.type = "password";
        y.style.display = 'flex';
        z.style.display = 'none';
    }
}

