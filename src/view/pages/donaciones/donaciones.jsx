import style from './donaciones.module.css';
import CustomInput from '../../components/form/form';
import email_icon from '../../assets/email.svg';
import hashtag_icon from '../../assets/hashtag.svg';
import billete_icon from '../../assets/billete.svg';
import { useState, useEffect } from 'react';
import Header2 from "../../components/Header2/Header2";
import firebase from 'firebase/compat/app';
import university from '../../assets/university.jpeg';
import 'firebase/firestore';

export default function Donaciones() {
    const [agrupaciones, setAgrupaciones] = useState([]);
    const [selectedAgrupacion, setSelectedAgrupacion] = useState("");
    const [numeroReferencia, setNumeroReferencia] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchAgrupaciones = async () => {
            try {
                const agrupacionesRef = firebase.firestore().collection('Agrupaciones');
                const snapshot = await agrupacionesRef.get();
                const nombres = snapshot.docs.map(doc => doc.data().nombre);
                setAgrupaciones(nombres);
            } catch (error) {
                console.error('Error al obtener las agrupaciones:', error);
            }
        };

        fetchAgrupaciones();
    }, []);

    const handleDonation = async () => {
        try {
            const agrupacionesRef = firebase.firestore().collection('Agrupaciones');
            const querySnapshot = await agrupacionesRef.where('nombre', '==', selectedAgrupacion).get();

            if (!querySnapshot.empty) {
                const agrupacionId = querySnapshot.docs[0].id;
                await agrupacionesRef.doc(agrupacionId).update({
                    donaciones: firebase.firestore.FieldValue.arrayUnion(email),
                    comprobantes: firebase.firestore.FieldValue.arrayUnion(numeroReferencia)
                });
                setSelectedAgrupacion("");
                setNumeroReferencia("");
                setEmail("");
                alert('¡Donación realizada con éxito!');
            } else {
                alert('La agrupación no fue encontrada. Por favor, verifique la selección e inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('Error al realizar la donación:', error);
            alert('Ocurrió un error al realizar la donación. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <div>
            <Header2 />
            <div className={style.Donaciones}>
                <div className={style.container}>
                    <div className={style.donaciones_form}>
                        <h2 className={style.title}>Donar</h2>
                        <div className={style.descripcion}>
                            <img src={university} alt="University" className={style.imagen} />
                            <p className={style.texto}>
                                Tu apoyo es vital para nuestras agrupaciones estudiantiles. Con tus donaciones, impulsamos programas y servicios que enriquecen la experiencia de nuestra comunidad unimetana. Cada aporte, sin importar su magnitud, tiene un impacto significativo. ¡Únete y haz la diferencia hoy mismo!
                            </p>
                        </div>
                        <CustomInput label={"Agrupación a Donar"} preffixIcon={<img src={billete_icon} alt="icon" />} type={'text'} placeholder={"Indica la agrupación a colaborar..."} onChange={(e) => {
                            setSelectedAgrupacion(e.target.value);
                        }}>
                            <select>
                                <option value="">Selecciona una agrupación</option>
                                {agrupaciones.map((agrupacion, index) => (
                                    <option key={index} value={agrupacion}>{agrupacion}</option>
                                ))}
                            </select>
                        </CustomInput>
                        <CustomInput label={"Número de Referencia"} preffixIcon={<img src={hashtag_icon} alt="icon" />} type={'text'} placeholder={"Ingresa el número de referencia de la transacción..."} onChange={(e) => {
                            setNumeroReferencia(e.target.value);
                        }}>
                        </CustomInput>
                        <CustomInput label={"Correo Electrónico"} preffixIcon={<img src={email_icon} alt="icon" />} type={'email'} placeholder={"Ingresa tu correo electrónico..."} onChange={(e) => {
                            setEmail(e.target.value);
                        }}>
                        </CustomInput>
                        <button type="button" className={style.send} onClick={handleDonation}>Realizar Donación</button>
                    </div>
                </div>
            </div>
        </div>
    )
}