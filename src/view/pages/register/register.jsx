import authService from '../../../controller/services/AuthService';
import style from './register.module.css'
import CustomInput from '../../components/form/form'
import email_icon from '../../assets/email.svg';
import lock_icon from '../../assets/lock.svg';
import person_icon from '../../assets/person.svg'
import phone_icon from '../../assets/phone.svg'
import university from '../../assets/university.jpeg';
import { useState } from 'react';

export default function Register() {
    // create user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if (name === "" || email === "" || password === "" || phone === "") {
            setErrorMessage("Rellene todos los campos");
        } else {
            authService.signUp(email, password, name, phone);
            
        }
    };

    return (
        <div className={style.Register}>
            <div className={style.container}>
                <div className={style.register_form}>
                    <h2 className={style.title}>Crear Cuenta</h2>
                    <CustomInput label={"Nombre"} preffixIcon={<img src={person_icon} alt="icon" />} type={'text'} placeholder={"Pepito Pérez"}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}>
                    </CustomInput>
                    <CustomInput label={"Email"} preffixIcon={<img src={email_icon} alt="icon" />} type={'email'} placeholder={"mail@correo.unimet.edu.ve"}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}>
                    </CustomInput>
                    <CustomInput label={"Teléfono"} preffixIcon={<img src={phone_icon} alt="icon" />} type={'tel'} placeholder={"123"}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}>
                    </CustomInput>
                    <CustomInput label={"Contraseña"} preffixIcon={<img src={lock_icon} alt="icon" />} type={'text'} placeholder={"Min. 8 caracteres"}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}>
                    </CustomInput>
                    <CustomInput label={"Confirmar contraseña"} preffixIcon={<img src={lock_icon} alt="icon" />} type={'text'} placeholder={"Min. 8 caracteres"}></CustomInput>
                    {errorMessage && <div className={style.error_message}>{errorMessage}</div>}
                    <button type="button" onClick={handleSubmit} className={style.send}>Crear cuenta</button>
                </div>
            </div>

            <div className={style.banner}>
                <img src={university} alt="university" className={style.university_image} />
            </div>
        </div>

    )
}

