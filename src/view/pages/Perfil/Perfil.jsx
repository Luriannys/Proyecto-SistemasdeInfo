import './Perfil.css';
import Header2 from '../../components/Header2/Header2'
import Footer2 from "../../components/footer2/footer2";
import person_icon from '../../assets/person.svg';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../controller/services/firebase';
import {AuthContext} from '../../../controller/services/AuthContext'


export default function Perfil() {
    const user = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Obtener el usuario actualmente autenticado
                const user = auth.currentUser;
                if (user) {
                    const uid = user.uid;
                    // Obtener el documento del usuario directamente con su UID
                    const userDoc = await db.collection('users').doc(uid).get();
                    if (userDoc.exists) {
                        // Establecer los datos del usuario en el estado
                        setUserData(userDoc.data());
                    } else {
                        console.log('El documento no existe');
                    }
                } else {
                    console.log('No hay usuario autenticado');
                }
            } catch (error) {
                console.error('Error obteniendo el documento:', error);
            }
        };

        fetchUserData();
    }, [user]);



  return (
    <>
    <Header2 />
    <div className='User_cont'>
        <div className='User_info'>
            <div className='user_picture'><img id='img' src={person_icon} alt='foto de perfil'/>
            </div>
                    <h1>Datos del usuario</h1>
            {userData ? (
                <div>
                <p>UID: {userData.uid}</p>
                <p>Nombre: {userData.name}</p>
                {/* Añade más campos según la estructura de tu documento */}
                </div>
            ) : (
                <p>No hay usuario autenticado</p>
            )}
            <div>__________________________________</div>
            <h5>Correo electronico: </h5>
            <h5>Fecha de Nacimiento: </h5>
            <h5>Agrupaciones a las que pertenezco: </h5>
        </div>
        
        <div className='User_edit'>
            <div className='c'>
            <label>Nombre 
                <input className= 'input' type='text' />
            </label>
            <label>Apellido 
                <input className= 'input'type='text' />
            </label>
            <label>Telefono
                <input className= 'input' type='text' />
            </label>
            </div>
            <div className='c'>
            <label>Correo Electronico
                <input className= 'input' type='email' />
            </label>
            <label>Fecha de Nacimiento 
                <input className= 'input' type='date' />
            </label>
            <label>Carrera
                <input className= 'input' type='text' />
            </label>
            </div>
            <button className='btn_edit'> Actualizar </button>
            </div>    
    </div>
    <Footer2></Footer2>
    </>
  )
}
