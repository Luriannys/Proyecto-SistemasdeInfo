import './register.css'
import CustomInput from '../../components/form/form'
import email_icon from '../../assets/email.svg';
import lock_icon from '../../assets/lock.svg';
import person_icon from '../../assets/person.svg'
import phone_icon from '../../assets/phone.svg'
import university from '../../assets/university.jpeg';

export default function Register() {
    return (
        <div className="Register">
            <div className="container">
                <div className="register-form">
                    <h2 className="title">Crear Cuenta</h2>
                    <CustomInput label={"Nombre"} preffixIcon={<img src={person_icon} className="icon" alt="icon" />} type={'text'} placeholder={"Pepito Pérez"}></CustomInput>
                    <CustomInput label={"Email"} preffixIcon={<img src={email_icon} className="icon" alt="icon" />} type={'email'} placeholder={"mail@correo.unimet.edu.ve"}></CustomInput>
                    <CustomInput label={"Teléfono"} preffixIcon={<img src={phone_icon} className="icon" alt="icon" />} type={'tel'} placeholder={"123"}></CustomInput>
                    <CustomInput label={"Contraseña"} preffixIcon={<img src={lock_icon} className="icon" alt="icon" />} type={'text'} placeholder={"Min. 8 caracteres"}></CustomInput>
                    <CustomInput label={"Confirmar contraseña"} preffixIcon={<img src={lock_icon} className="icon" alt="icon" />} type={'text'} placeholder={"Min. 8 caracteres"}></CustomInput>
                    <button type="button" className="send">Crear cuenta</button>
                </div>
            </div>

            <div className="banner">
                <img src={university} alt="university" className="university-image" />
            </div>
        </div>

    )
}

